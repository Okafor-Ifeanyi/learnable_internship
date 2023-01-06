class Teachable_LMS {
    constructor(topic_name = 'programming', resources) {
        this.topic_name = topic_name
        this.resources = resources
        if (this.constructor === Teachable_LMS) {
            throw new Error('Teachable_LMS cannot be implemented')
        }
    }

    setTopic = (week) => {
        switch(week) {
            case 1 :
                console.log(`${week} Intro to Javascript`)
                return 'intro to javascript'
            case 2 :
                console.log(`${week} OOP1`)
                return 'OOP1'
            case 3 :
                console.log(`${week} OOP2`)
                return 'OOP2'
            case 4 :
                console.log(`${week} OOP3`)
                return 'OOP3'
            case 5 :
                console.log(`${week} OOP4`)
                return 'OOP4'
            case 6 :
                console.log(`${week} OOP5`)
                return 'OOP5'
            default:
                console.log(`${week} no topic`)
                return `OOP${week}`
        }
    }

    set_resources = () => {
        console.log('keep working hard')
        return 'you will make it'
    }
}


class Learning_Path extends Teachable_LMS{
    constructor(topic_name, resources, path) {
        super(topic_name, resources);
       this.path = path
    }

    setPat = (path) => {
        switch(path) {
            case 'backend':
                console.log(`access ${path} courses`);
                return `${path} path Congrats!!!`
            case 'frontend':
                console.log(`access ${path} courses`);
                return `${path} path Congrats!!!`
            case 'UI/UX':
                console.log(`access ${path} courses`);
                return `${path} path Congrats!!!`
            case 'web3':
                console.log(`access ${path} courses`);
                return `${path} path Congrats!!!`
            default:
                console.log(`choose path => web3, UIUX, frontend, backend`);
                return `${path} path Congrats!!!`
       }
        }
}

const learning = new Learning_Path()
console.log(learning.setPat('backend'))

class Video_courses extends Teachable_LMS{
    constructor(topic_name, resources, time_duration) {
        super(topic_name, resources)
        this.time_duration = time_duration
    }
}


class Task_and_Assignment extends Teachable_LMS {
    constructor(topic_name, resources, article, coding) {
        super(topic_name, resources)
        this.article = article
        this.coding  = coding
    }
} 

class Submit_task extends Task_and_Assignment {
    constructor(article, coding, google_doc, medium) {
        super(article, coding)
        this.google_doc = google_doc
        this.medium = medium
    }

    setSubmitter = (submitType) => {
        if (submitType === 'google_doc') {
            console.log('google doc link submitted')
        } else if (submitType === 'medium') {
            console.log('medium link successfully submitted')
        }else {
            return 'deadline exceeded'
        }
    }

}

const submit_task = new Submit_task()
console.log(submit_task.setSubmitter('google_doc'))