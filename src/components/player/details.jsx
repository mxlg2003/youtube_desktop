import React            from 'react';
import YT_API_KEY       from '../../../config/api_key';
import { parseDate }    from '../../helpers';
import { fetchDetails } from '../../actions/youtube_video_actions';
import DetailsLower     from './details_lower';

class Details extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      details: {},
      subs: 0,
      showAllDecription: false
    };
  }

  componentDidMount() {
    fetchDetails(this.props.videoId, this);
    }

  componentWillReceiveProps(newProps) {
    if(newProps.videoId !== this.props.videoId) {
      fetchDetails(this.props.videoId, this);
    }
  }

  

  render() {

    if (!this.state.details.snippet) {
      return null;
    }
    console.log(this.state);
    
    const { title, channelTitle, publishedAt, description } = this.state.details.snippet;
    const { viewCount, likeCount, dislikeCount } = this.state.details.statistics;

    return (
      <div className="details-container">
        <div className="details-upper-container">
          <h1 className="title">{title}</h1>
          <div className="details-stats-bar">
            <div className="details-stats-bar-left">
              <a href="" className="channel-name">{channelTitle}</a>
              <div className="button-span">
              <button type="button" className="sub-button">
                <img className='white-burger' src="./app/assets/whiteburger.png"/>
                <span>Subscribe</span>
              </button>
              <span className="sub-span">{Number(this.state.subs).toLocaleString()}</span>
              </div>
            </div>
            <div className="details-stats-bar-right">
              <span className="total-views">{Number(viewCount).toLocaleString()} views</span>
            </div>
          </div>
          <div className="details-action-bar">
            <div className="details-action-bar-left">
              <button type="button" className="add-button">
                <i className="material-icons">add</i>
                <span>Add to</span>
              </button>
              <button type="button" className="share-button">
                <i className="material-icons">share</i>
                <span>Share</span>
              </button>
            </div>
            <div className="details-action-bar-right">
              <button type="button" className="like-button">
                <i className="material-icons">thumb_up</i>
                <span>{Number(likeCount).toLocaleString()}</span>
              </button>
              <button type="button" className="dislike-button">
                <i className="material-icons">thumb_down</i>
                <span>{Number(dislikeCount).toLocaleString()}</span>
              </button>
            </div>
          </div>
        </div>

        <DetailsLower 
          publishedAt={publishedAt}
          description={description} />

      </div>
    );
  }
}

export default Details;
