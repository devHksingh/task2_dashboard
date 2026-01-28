import { useEffect } from "react";
import { useNavigate } from "react-router";


const Homepage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/myHub");
  },[navigate])
  return (
    // this is just dummy content while redirecting to /myHub . i have ui element for myHub page. so i created this homepage component to redirect to myHub
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
  )
}

export default Homepage