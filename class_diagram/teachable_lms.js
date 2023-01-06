class User {
    constructor(email, fullname, password) {
        this.email = email
        this.fullname = fullname
        this.password = password 
        if (this.constructor === User) {
            throw new Error('Teachable_LMS cannot be implemented')
        }
    }

    login() {
        console.log(`Login:  \nEmail - ${this.email} \nPassword - ****`)
        console.log(`if {username - ${this.email}} and {password - ****} uniquely exists in server, Login. \n`)
    }

    verifyLogin () {
        console.log(`Click the link on ${this.email} to verify your acc\n`)
    }

    editProfile(email, fullname) {    
        this.email = email
        this.fullname = fullname
    }
    editFeatures () {

    }
}

class Features extends User {
    constructor(email, fullname, password) {
        super(email, fullname, password)
        // this.country = country
        // this.street_address = street_address
        // this.city = city
        // this.state = state
        // this.zip_code = zip_code
        // var details = console.log(country +"\n"+ street_address +"\n"+ city +"\n"+ state +"\n"+ zip_code)
        // return details
    }
  
    update_billing_info(country, street_address, city, state, zip_code) {
        console.log("Updated BIlling info: "+ street_address, city, state, zip_code, country +"\n")
    }

    sendMessage(contact, message) {
        console.log(`{message} sent to ${contact} \n`)
    }

    // Encapsulated this cause i wont want people to call access it from here
    #manageSubscriptions(C_N= "Current path", R_P= "$50 ", T=dateTime, action="True") {
        console.log(`Course_name - ${C_N} \nRecrring_price - ${R_P} \nTIme - ${T} \nActions - ${action} \n`)
    }

    // Displayed here
    display_active_subscription(){
        this.#manageSubscriptions()
    }

    countdown_to_Expire() {
        this.result = 31 - (new Date().getDate())
        console.log(`you have ${this.result} days left\n`)
        this.#manageSubscriptions()        
    }

    #payment_detail(name = "Auto", card_num, country, expiration_date, postalcode) {
        name = this.fullname
        console.log(`name = ${this.fullname}\n
        card_number = ${card_num}\n
        country = ${country}\n
        expiration_date = ${expiration_date}\n
        postalcode = ${postalcode}`)
    }
    update_credit_card() {
        this.#payment_detail()
    }
}

class Admin extends Features {

    constructor(email, fullname, password, role = "Admin") {
        super(email, fullname, password)
        this.role = role
    }

    updateCourses() {
        let day;
        let publishCourse = false;
        switch (new Date().getDay()) {
            case 1:
              day = "Monday";
              publishCourse = true;
              console.log("SetPublish next category to TRUE")
          }
    }

    manageUser(id) {
    // Just a list of manager functionalities i guess tappi and other admins would have
        console.log(`Search log activity with the UserID - ${id}`)
        console.log(`Update user profile with the UserID - ${id}`)
        console.log(`Delete account with the UserID - ${id}`)
        console.log(`Deactivate user with the UserID - ${id}`)
    }

    manageTrack(track, id=1) {
            switch(track) {
                case 'backend':
                // A list exapmle of commands accessible from the admin portal, through tracks
                    console.log(`Display all genies under ${track} `);
                    console.log(`Display all Facilitators under ${track} `);
                    console.log(`Display all Courses-Categories under ${track} `);
                    console.log(`Display Course-Category under ${track} with id of ${id} `);
                    return `${track}`
                    
                case 'frontend':
                    console.log(`Display all genies under ${track} `);
                    console.log(`Display all Facilitators under ${track} `);
                    console.log(`Display all Courses-Categories under ${track} `);
                    console.log(`Display Course-Category under ${track} with id of ${id} `);
                    return `${track}`
                case 'UI/UX':
                    console.log(`Display all genies under ${track} `);
                    console.log(`Display all Facilitators under ${track} `);
                    console.log(`Display all Courses-Categories under ${track} `);
                    console.log(`Display Course-Category under ${track} with id of ${id} `);
                    return `${track}`
                case 'web3':
                    console.log(`Display all genies under ${track} `);
                    console.log(`Display all Facilitators under ${track} `);
                    console.log(`Display all Courses-Categories under ${track} `);
                    console.log(`Display Course-Category under ${track} with id of ${id} `);
                    return `${track}`
                default:
                    console.log(`choose track => web3, UIUX, frontend, backend`);
                    return "Try again"
            }
        }
}

class Track extends Features{
    constructor(email, fullname, password) {
        super(email, fullname, password)
    }

    
    enroll (track) { 
        switch(track) {
            // A list example of commands accessible from the admin portal, through tracks
    
            case 'backend':
                return console.log(`${this.email} has been enrolled to backend track`)
            
            case 'frontend':
                return console.log(`${this.email} has been enrolled to frontend track`)
                                        
            case 'UI/UX':
                return console.log(`${this.email} has been enrolled to UI/UX track`)
            
            case 'web3':
                return console.log(`${this.email} has been enrolled to web3 track`)
    
            default:
                console.log(`choose track => web3, UI/UX, frontend, backend`);
                return "Try again"
       }
    }
    
    displayCourse () {
        console.log("Displays courses available in this track under their various course categories")
    }

    displayProgress(num_of_course, course_completed) {
        diff = (num_of_course - course_completed)
        result = (diff/num_of_course)  * (1/100)
        return console.log(result)
    }
}
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

class CourseCategory extends Track {
    constructor(email, fullname, password) {
        super(email, fullname, password)
    }

    courseCategory(title) {
        console.log(`Displaying courses under category {${title}}`)
    }

    comments() {

        

        console.log(`Comments - Show here with attributes like: User, ${dateTime}, delete`)
    }

    course(title, description ="admin added", video ="admin added", learning_resources ="admin added", task_assignment ="admin added") {
        console.log(`title - ${title} \nDescription - ${description} \nVideo - ${video}`)
        console.log(`Learning_Resources- ${learning_resources} \nTask_assignment - ${task_assignment}`)

        return this.comments()
    }
}

class Facilitator extends CourseCategory {
    constructor(email, fullname, password, role = "facilitator") {
        super(email, fullname, password)
        this.role = role
    }

    uploadCourse(title, description, video, learning_resources, task_assignment) {
        console.log(`title - ${title} \nDescription - ${description} \nVideo - ${video}`)
        console.log(`Learning_Resources- ${learning_resources} \nTask_assignment - ${task_assignment}`)
        console.log(`Time - ${dateTime}`)
        return this.comments()
    }

    crud_to_uploads() {
        console.log(`Display all courses`);
        console.log(`Delete button`);
        console.log(`Upload button \nUpdate Button`);      
    }
}

class Genie extends CourseCategory {
    constructor(email, fullname, password, role = "Genie") {
        super(email, fullname, password)
        this.role = role
    }
    updateProfile(email, fullname) {    
        this.email = email
        this.fullname = fullname
    }
}



const tappi = new Genie("Bio", "tappi", "pas")
tappi.login()
// tappi.verifyLogin()
// // tappi.updateCourses()
tappi.update_billing_info("Nigeria", "Hill View", "Enugu-North", "Enugu", 100403)
tappi.sendMessage(08129741530, "I love u")
tappi.display_active_subscription()
// tappi.course()
// tappi.manageTrack("backend")

