import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { styled } from "styled-components";
import ReactPlayer from "react-player/youtube";
import "../../src/player.css";

const Detail = () => {
  const { id } = useParams();
  const bottomEl = useRef(null);
  const [detailData, setDetailData] = useState({});
  const [play, setPlay] = useState(false);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "movies", id);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetailData(docSnap.data());
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    })();
  }, [id]);

  const handleClick = () => {
    bottomEl.current?.scrollIntoView({ behavior: "smooth" });
    setPlay(true);
  };

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt="" />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt="" />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <PlayerBtn onClick={handleClick}>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </PlayerBtn>

          <TrailerBtn>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </TrailerBtn>

          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>

        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>

      {play && (
        <VideoWrapper>
          <ReactPlayer
            url={detailData.videoId}
            width="100%"
            height="100%"
            playing={play}
            loop
            controls
            className="react-player"
          />
        </VideoWrapper>
      )}

      <div ref={bottomEl} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const PlayerBtn = styled.button`
  font-size: 15px;
  font-weight: 600;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.6s ease 0s;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: #c6c6c6;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 15px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const TrailerBtn = styled.button`
  font-size: 15px;
  font-weight: 600;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.6s ease 0s;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 15px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const AddList = styled.div`
  margin-right: 26px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  margin-left: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;

  div {
    height: 40px;
    width: 40px;
    background: #000;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: #f9f9f9;
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: #f9f9f9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const VideoWrapper = styled.div`
  width: 1000px;
  height: 500px;
  padding-bottom: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 400px;
    height: 300px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 500px;
    height: 300px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 700px;
    height: 300px;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 600px;
    height: 300px;
  }
`;

export default Detail;
