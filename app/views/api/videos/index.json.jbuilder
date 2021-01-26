json.set! "videos" do  
    @videos.each do |video|
        json.set! video.id do
            json.partial! 'api/videos/video', video: video
            json.photoUrl url_for(video.photo)
            json.videoUrl url_for(video.video)
        end 
    end 
end 

