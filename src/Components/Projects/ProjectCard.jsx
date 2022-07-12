import React, { useState } from "react";
import { useEffect } from "react";
import project0 from "../../assets/project_imgs/comment.png";
import project1 from "../../assets/project_imgs/easy-bank.png";
import project5 from "../../assets/project_imgs/loop-studio.png";
import project3 from "../../assets/project_imgs/space.png";
import project4 from "../../assets/project_imgs/tip-splitter.png";
import project2 from "../../assets/project_imgs/todo.png";
const ProjectCard = ({ name, description, github, id, liveLink }) => {
  const [img, setImg] = useState();
  useEffect(() => {
    switch (id) {
      case 0:
        setImg(project0);
        break;
      case 1:
        setImg(project1);
        break;
      case 2:
        setImg(project2);
        break;
      case 3:
        setImg(project3);
        break;
      case 4:
        setImg(project4);
        break;
      case 5:
        setImg(project5);
        break;

      default:
        break;
    }
  }, [id]);
  return (
    <div className="Cards">
      <div className="Cards__top">
        <img src={img} alt="project" loading="lazy" />
      </div>
      <div className="Cards__bottom">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="Cards__btn">
          <button>
            <a href={liveLink}> Live Site</a>
          </button>
          <button>
            <a href={github}>GitHub Repo</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
