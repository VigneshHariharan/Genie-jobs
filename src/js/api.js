
// JOB LISTING ITEM
// {
//       "contents": "<p><b>DESCRIPTION</b><br><br> Do you want to shape the future of data protection and management services for AWS? Are you passionate about designing cutting-edge customer experiences in these areas? Do you want to lead, grow, and be part of a team that is building a service used by hundreds of thousands of customers and growing quickly? If you said yes to any or all of those, come join the AWS Backup service team and help us revolutionize the world of cloud-based protection!<br><br>AWS Backup is a recently-launched service that provides a fully managed backup solution that makes it easy to centralize and automate backing up application across AWS services. Embark on a journey with us to build and grow a backup management service that can scale without limits. We need your passion, innovative ideas, and creativity to help take the service to new heights. This is your opportunity to shape the future of AWS Backup and transform the way the world thinks about protection at massive scale.<br><br>This Senior Product UX Designer will have a big impact on defining a coherent experience for our customers who will use our service to protect their workloads running natively on AWS. Throughout the strategy, design, and development lifecycle, this senior product designer will work collaboratively with other designers, product managers, engineers, and executives.<br><br>Inclusive Team Culture<br>Here at AWS, we embrace our differences. We are committed to furthering our culture of inclusion. We have ten employee-led affinity groups, reaching 40,000 employees in over 190 chapters globally. We have innovative benefit offerings, and host annual and ongoing learning experiences, including our Conversations on Race and Ethnicity (CORE) and AmazeCon (gender diversity) conferences. Amazon's culture of inclusion is reinforced within our 14 Leadership Principles, which remind team members to seek diverse perspectives, learn and be curious, and earn trust.<br><br>Work/Life Balance<br>Our team puts a high value on work-life balance. It isn't about how many hours you spend at home or at work; it's about the flow you establish that brings energy to both parts of your life. We believe striking the right balance between your personal and professional life is critical to life-long happiness and fulfillment. We offer flexibility in working hours and encourage you to find your own balance between your work and personal lives.<br><br>Mentorship &amp; Career Growth<br>We care about your career growth too. Whether your goals are to explore new technologies, take on bigger opportunities, or get to the next level, we'll help you get there. Our business is growing fast and our people will grow with it.<br><br>Responsibilities:<br>•  Lead the design of AWS Backup products in a team environment. Work with leadership in design planning and goal creation.<br>•  Understand customers and their needs through customer research and feedback, and market analysis.<br>•  Design the architecture, interface, and interaction flow of services and experiences.<br>•  Develop personas, customer journey maps, conceptual diagrams, wireframes, and prototypes.<br>•  Facilitate the design process, present and iterate design solutions.<br>•  Craft, pitch, and validate long-term design strategies.<br>•  Continually iterate and evolve the way we design for and learn from our customers.<br>•  Chart a course for yourself and others in ambiguous situations. Mentor and develop designers within your own organization and beyond.<br><br> <b>BASIC QUALIFICATIONS</b> <br><br> •  6+ years of experience working on modern and complex web experience<br>•  6+ years of experience creating wireframes, clickable prototypes, and design specs<br>•  6+ years of experience designing and prototyping with tools such as Sketch, InVision, Axure, or similar.<br>•  An online portfolio demonstrating samples of design deliverables (personas, journey maps, low to high fidelity prototypes)<br>•  Bachelor's degree or commensurate experience.<br><br> <b>PREFERRED QUALIFICATIONS </b> <br><br> •  4+ years of experience running research to gather customer needs / requirements / feedback<br>•  4+ years of experience working in direct collaboration with product leadership, development managers, and cross-functional stakeholders.<br>•  Experience creating designs for both enterprise and consumer products.<br>•  Strengths in interaction design and user research with a good eye for visuals<br>•  Experience owning large-scale projects, communicating timelines, and executing independently.<br>•  Knowledge about design principles and design process<br>•  Experience acquiring user data at different stages of the projects including the early stage<br>•  Experience working with stakeholders to plan and execute designs that are strategic in nature.<br>•  Master's degree in design, human-computer interaction (HCI), or equivalent degree.<br>•  Strong verbal communication and presentation skills.<br>•  Strong time management skills and the ability to be self-directed<br><br>Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status. For individuals with disabilities who would like to request an accommodation, visit US Disability Accommodations.</p>",
//       "name": "Product UX Designer, AWS Backup",
//       "type": "external",
//       "publication_date": "2021-10-20T23:39:43Z",
//       "short_name": "product-ux-designer-aws-backup",
//       "model_type": "jobs",
//       "id": 7169585,
//       "locations": [
//         {
//           "name": "Seattle, WA"
//         }
//       ],
//       "categories": [
//         {
//           "name": "UX"
//         }
//       ],
//       "levels": [
//         {
//           "name": "Senior Level",
//           "short_name": "senior"
//         }
//       ],
//       "tags": [],
//       "refs": {
//         "landing_page": "https://www.themuse.com/jobs/amazon/product-ux-designer-aws-backup"
//       },
//       "company": {
//         "id": 12090,
//         "short_name": "amazon",
//         "name": "Amazon"
//       }
//     },


// https://www.themuse.com/developers/api/v2
// inspiration: https://remoteok.com/

// 1.Job listing
// 5.Pagination
// 2.Search 
// 3.Sorting
// 4.Filter - tagging, and, or
// 6.Details page, and job apply notification with name and email

// Design
// 1.Fetch the data 
// 2.create views separately for the job listing item - JOB
// 3.Separate class for the job listing and methods to apply those

// List viewing module

const API_URL = "https://www.themuse.com/api/public/jobs";
const API_KEY = "44bb3c3b217d8b4f31d30a7ca85eee4462bbe622e3b99608a001525855c84553";

// master token for strapi
// 8d784cf86a9b689214d4bfc542d4eb82e895cc1997828601141e26687a4a6b18565b31eddd903a55006ebac1a2a3369d8313de16fd49ad7479b3053822e2f86319cf25d04b0ff05fd5ea8d424a3a2d517ccf3f6fe94f5bde8b874adb8d43bbfba88d5defb8894653384d66b9b5b1d0369100aaac9d316426fb5d83a1320bdf95



export const fetchJobs = async (page, category, tag) => {

    try {
        const queries = new URLSearchParams({ api_key:API_KEY, page: page || 1 })
        const resString = await fetch(`${API_URL}?${queries}`);
        const res = resString.json();
        return res;
    } catch(err){
        console.log(err,'jobs api failure')
    };
}