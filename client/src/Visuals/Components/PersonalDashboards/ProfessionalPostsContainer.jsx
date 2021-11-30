import React, { useState, useEffect } from "react";
import PostsShowComponent from "./PostsShowComponent";
import { getTips } from "../../../ApiReq/constantInfo";
import PopContainer from "../PopContainer";
import AddPostComponent from "./AddPostComponent";

function ProfessionalPostsContainer({ userId,categoryId }) {
  const [popUp, setPopUp] = useState(false);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    getTips(userId).then((r) => setTips(r));
  }, [userId]);

  function changePopUp() {
    setPopUp((state) => (state ? false : true));
  }

  return (
    <div className="padd-lg">
      <div className="padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main">
        Publicaciones
      </div>
      <button
        onClick={changePopUp}
        className="width-100 mrg-lg-t padd-sm-tb font-lg font-main border-radius-sm action action-add-post"
      >
        Agregar post
      </button>
      <PopContainer
        children={
          <AddPostComponent
            close={setPopUp}
            setTips={setTips}
            userId={userId}
            categoryId={categoryId}
          />
        }
        trigger={popUp}
      />
      {tips?.map((elem, index) => {
        return <PostsShowComponent key={index} text={elem.text} tipId={elem._id} setTips={setTips}/>;
      })}
    </div>
  );
}

export default ProfessionalPostsContainer;
