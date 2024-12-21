import VideoCard from "../components/VideoCard.jsx";

const Content = () => {
  const videoClips = [
    {
      videoUrl: "https://youtu.be/GzVQxLv_xuI",
      imageUrl: "./src/assets/images/danceimg.jpeg",
      title: "Valorant | Dancin' | | Editz |",
      username: "zeropse",
    },
    {
      videoUrl: "https://youtu.be/aMbXVM_IQSg",
      imageUrl: "./src/assets/images/collideimg.jpeg",
      title: "Valorant | Collide | | Editz |",
      username: "zeropse",
    },
    {
      videoUrl: "https://youtu.be/38HMDOqZ9QI",
      imageUrl: "./src/assets/images/cupidimg.jpeg",
      title: "Valorant | Cupid | | Editz |",
      username: "zeropse",
    },
    {
      videoUrl: "https://youtu.be/3LFs4tyir60",
      imageUrl: "./src/assets/images/fortniteimg.jpeg",
      title: "Fortnite",
      username: "zeropse",
    },
    {
      videoUrl: "https://youtu.be/408xMGq9Vhk",
      imageUrl: "./src/assets/images/onivandal.jpeg",
      title: "Oni Vandal",
      username: "zeropse",
    },
    {
      videoUrl: "https://youtu.be/FiOYqZGi-u8?si=2-NwfvAfjOu-bpxr",
      imageUrl: "./src/assets/images/pubg.jpg",
      title: "Pubg Mobile 2020",
      username: "zeropse",
    },
  ];

  return (
    <section className="wrapper p-12 min-h-screen">
      <div className="inner-content">
        <h2 className="inner-content text-4xl font-bold text-center text-[#e0aa3e] mb-12">
          My Gameplay Clips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
          {videoClips.map((clip, index) => (
            <VideoCard
              key={index}
              videoUrl={clip.videoUrl}
              imageUrl={clip.imageUrl}
              title={clip.title}
              username={clip.username}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
