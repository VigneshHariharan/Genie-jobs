import { fetchJobs } from './api';
import { JobListingView } from './views'


const jobListingView = new JobListingView();
const jobListingDomElement = document.querySelector('#jobListing');

class Home {
    constructor(){
        this.jobs = [];
        this.totalJobs = 0;
        this.pageCount = 35987;
        this.noOfItemsInPage = 20;
        this.currentPage = 1;
        this.observer = null;
    }

    
    assignEvents(){
        const lastItem = document.querySelector('#lastElement')

        // if(this.observer){
        //     this.observer.disconnect()
        // }
        this.observer =  new IntersectionObserver((entries,observer) => {
            console.log('observer ',entries,observer)
             entries.forEach(entry => {

            if(entry.target.getAttribute("id") === 'lastElement' && entry.isIntersecting){
                 this.addMoreJobs()
                 observer.disconnect()

            }

             })
            //  observer.observe(lastItem)
        },{
            // rootMargin: "-100px",
            // root: document.querySelector('#lastElement'),
            // threshold: 1.0

        });
        // this.observer.observe(lastElement)
        this.observer.observe(lastItem)
    }

     addMoreJobs = async () => {
          
        this.currentPage = this.currentPage + 1;
        const jobs = await fetchJobs(this.currentPage);
        // console.log('this. josb ',this.jobs,jobs.results)
        
        const jobListingElem = jobListingView.getView(jobs.results);
        this.jobs.push(...jobs.results)
        jobListingDomElement.appendChild(jobListingElem);
        this.assignEvents();

    }

    async renderJobListing(){
        
        const jobs = await fetchJobs();
        this.jobs = [...jobs.results];
        // console.log('jobs : ',this.jobs)
        const jobListingElem = jobListingView.getView(this.jobs, this.addMoreJobs);
        jobListingDomElement.appendChild(jobListingElem);

        this.assignEvents()
    };
};

const home = new Home();

home.renderJobListing()