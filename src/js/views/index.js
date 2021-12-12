// Job view, job listing view, filter views 
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export class JobDescription {
    getView(content){
        const jobDescriptionElem = document.createElement("div");
        jobDescriptionElem.innerHTML = content
        return jobDescriptionElem
    }
}
        const jobDescription = new JobDescription();


export class JobView {
    // job - id,name,publication date,company.name
    getView(job){
        // job title
        // need to show company name

        // locations available - list
        // categories - list 
        // tags - list
        // levels

        const jobElem = document.createElement('div');
        jobElem.classList.add('jobElem');

        const jobTitleElem = document.createElement('h4');
        jobTitleElem.innerText = job.name;
        
        const companyName = document.createElement("p");
        companyName.innerText = job?.company?.name || "";

        const publicationDateElem = document.createElement("h6");
        const publicationDate = dayjs(job?.publication_date)?.fromNow();
        publicationDateElem.innerText = publicationDate;

        // locations
        const locationsElem = document.createElement('div');
        locationsElem.classList.add('tagsListing')
         job?.locations?.forEach((location) => {
             const locationNameElem = document.createElement('p');
             locationNameElem.classList.add('tags');
             locationNameElem.innerText = location?.name;
             locationsElem.appendChild(locationNameElem)
         })
        const content = jobDescription.getView(job?.contents);



         // level

        jobElem.appendChild(jobTitleElem);
        jobElem.appendChild(companyName);
        jobElem.appendChild(publicationDateElem);
        jobElem.appendChild(locationsElem);
        // jobElem.appendChild(content)



        return jobElem;
    }
}

const jobView = new JobView()

export class JobListingView {
    // jobList- array of job
    getView(jobList){
        const lastElementInPrev = document.querySelector('#lastElement');
        if(lastElementInPrev){
            lastElementInPrev.removeAttribute('id');
        }
        const jobListingViewFrag = new DocumentFragment();
        // creating lists
        jobList?.forEach((job,index) => {            
            const jobElem = jobView.getView(job);
            if(index === jobList?.length - 1){
                // jobElem.setAttribute('id','lastElement');
                jobElem.id = 'lastElement'

            };
            jobListingViewFrag?.appendChild(jobElem);

        });
        return jobListingViewFrag;
    }
}