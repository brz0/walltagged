import React from 'react';
import s from './browse.scss';

export default class PopularTags extends React.Component {
  render() {
    return(

      <div className={s.popularTagsWrap}>
        <div className={s.containerWrap}>
        <h3>popular tags</h3>

        <div className={s.tagBtnWrap}>
        <a href="#"><div className={s.popularTagsThird}>#netart</div></a>
        <a href="#"><div className={s.popularTagsThird}>#vaporwave</div></a>
        <a href="#"><div className={s.popularTagsThird}>#graffiti</div></a>
        </div>
        <br />
        <div className={s.tagBtnWrap}>
        <a href="#"><div className={s.popularTagsThird}>#portrait</div></a>
        <a href="#"><div className={s.popularTagsThird}>#original</div></a>
        </div>

        </div>
      </div>

    )
  }
}
