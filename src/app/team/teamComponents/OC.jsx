import ProfileCard from "./profileCard"

export default function OC(){
    return (
        <div>
            <h2>OVERALL COORDINATOR</h2>
            <ProfileCard 
                name="Tim Cook"
                role = "Overall Coordinator"
                photoSrc = "/timCook.jpg"    
                gmailAddress="nukalakashyap21@gmail.com"
                linkedinURL="https://www.linkedin.com/in/kashyap-nukala-297750321/"
            />
        </div>
    )
}