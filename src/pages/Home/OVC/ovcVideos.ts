type YouTubeVideo = {
  platform: "youtube";
  id: string;
};

type FacebookVideo = {
  platform: "facebook";
  url: string;
};

type Video = YouTubeVideo | FacebookVideo;

export const ovcVideos: Video[] = [
  {
    platform: "youtube",
    id: "EVLIcsF-8dA",
  },
  {
    platform: "youtube",
    id: "ufnQuif7J0Y",
  },
  {
    platform: "youtube",
    id: "Yb-OwjBI8RQ",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/watch/?v=1544810682770319",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/reel/1749711332298514",
  },
];

export const getEmbedUrl = (video: Video) => {
  if (video.platform === "youtube") {
    return `https://www.youtube.com/embed/${video.id}`;
  }

  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    video.url,
  )}`;
};
