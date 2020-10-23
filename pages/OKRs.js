import { useRouter } from 'next/router';
export default function Home ()
{
  const { query } = useRouter();
  const name = query.name;
  const job = query.job;
  return (

    <div className="mobile">
      <div className="display containers flexWrap">
        <div className="display w50 flexWrap">
          <div className="display">
            <div className="auto">
              <img className="img" src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/136-1366211_group-of-10-guys-login-user-icon-png.png?alt=media&token=253bb403-41dc-44ad-a442-4649eb672487" />
            </div>
          </div>
          <div className="text ">
            <div className="name">{name}</div>
            <div className="display">
              {job}
            </div>
          </div>
        </div>
        <div className="like w50">
          <div className="boxes">
            <div className="boxes">
              <img className="icons auto" src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/img_341960.png?alt=media&token=83a52b27-58bf-4f3f-88c8-4699a8aa8afe" />
              <div className="text">14/01/2020</div>
            </div>
            <div className="text w100">12.45</div>
          </div>
        </div>
        <div className="content-text content-gap">
          <div>
            Content 1
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Content 2Ut enim ad minim veniam, quis nostrudyewr Lorem ipsum dolor sit amet, consectetur Content 3Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="content-text content-gap">
          <div>
            Content 2
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Content 2Ut enim ad minim veniam, quis nostrudyewr Lorem ipsum dolor sit amet, consectetur Content 3Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="content-text content-gap">
          <div>
            Content 3
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Content 2Ut enim ad minim veniam, quis nostrudyewr Lorem ipsum dolor sit amet, consectetur Content 3Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="content-text content-gap display flexWrap">
          <div className="w100 mb">
            Image
          </div>
          <div className="mr">
            <img className="view" src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/file.png?alt=media&token=69139c77-3ef2-40ad-a812-e6e459e2f638"} />
          </div>
          <div className="mr">
            <img className="view" src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/file.png?alt=media&token=69139c77-3ef2-40ad-a812-e6e459e2f638"} />
          </div>
          <div className="mr">
            <img className="view" src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/file.png?alt=media&token=69139c77-3ef2-40ad-a812-e6e459e2f638"} />
          </div>
        </div>
      </div>
      <style jsx>{`
          .display
          {
            display:flex;
          }
          .flexWrap
          {
            flex-wrap: wrap;
          }
          .mr
          {
            margin-right: 8px;
          }
          .mb
          {
            margin-bottom: 8px;
          }
          .boxes
          {
            display: flex;
            flex-wrap: wrap;
            text-align: right;
            align-items: center;
            justify-content: flex-end;
          }
          .auto
          {
            margin: auto 0;
          }
          .w50
          {
              width:50%;
          }
          .name
          {
            font-size: 14px;
            font-weight: 500;
          }
          .text
          {
            font-size: 10px;
            padding-left: 8px;
          }
          .view
          {
            width: 50px;
            height: 40px;
          }
          .img
          {
            width: 30px;
            height: 30px;
          }
          .icons
          {
            width: 7px;
            height: 7px;
          }
          .content-text
          {
            font-size:10px;
          }
          .border
          {
            padding:4px;
            border-radius:4px;
            margin: auto;
          }
          .flex
          {
            display:flex;
            flex-wrap:wrap;
            justify-content:start;
          }
          .w100
          {
            width:100%;
          }
          .containers
          {
            padding: 16px;
          }
          .content-gap
          {
            padding: 8px 0;
          }
          .mobile
          {
            max-width:400px;
            margin:auto;
          }
      `}</style>

    </div>
  )
}

