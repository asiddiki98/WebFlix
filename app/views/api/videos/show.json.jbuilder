json.set! @video.id do 
    json.partial! 'api/videos/video', video: @video
    json.videoUrl url_for(@video.video)
end 