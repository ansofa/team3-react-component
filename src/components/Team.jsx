import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section>
      <hr />
      <div className="row">
        <div className="col-md-3">
        <TeamCard name={"Farras"} description={"Scrum Master"} photo={"https://img.freepik.com/free-photo/medium-shot-smiley-programmer-indoors_23-2149101154.jpg?w=900&t=st=1698935916~exp=1698936516~hmac=b5554f52a06ae3526f93cbdff1f06c1446bb5bbd6c5e6cd80e804f9b06e29095"}/>
        </div>
        <div className="col-md-3">
        <TeamCard name={"Ansofa"} description={"Team Leader"} photo={"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=900&t=st=1698936518~exp=1698937118~hmac=09b67ad1c5e6a974cdb616854ebcf0052445bc428a346cde7c2afe23a000f64d"}/>
        </div>
        <div className="col-md-3">
        <TeamCard name={"Dio"} description={"Front End"} photo={"https://img.freepik.com/free-photo/surprised-handsome-guy-posing-against-white-wall_176420-32961.jpg?w=900&t=st=1698936561~exp=1698937161~hmac=16f73ebf200326379fd11a9c61d8beebdf7603c7060c44c1b8966578ab798758"}/>
        </div>
        <div className="col-md-3">
        <TeamCard name={"Ariiq"} description={"Front End"} photo={"https://img.freepik.com/free-photo/medium-shot-smiley-programmer-indoors_23-2149101154.jpg?w=900&t=st=1698935916~exp=1698936516~hmac=b5554f52a06ae3526f93cbdff1f06c1446bb5bbd6c5e6cd80e804f9b06e29095"}/>
        </div>
        <div className="col-md-3">
        <TeamCard name={"Fayi"} description={"Back End"} photo={"https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=900&t=st=1698935038~exp=1698935638~hmac=f7be73973b8c34ac8151996e7c2e88ee878d00244f5f7b3a535ead55e700253c"}/>
        </div>
      </div>
    </section>
  );
};

export default Team;
