import React from 'react';

import { ranklist } from '../../api';
import Ranklist from '../../components/ranklist/Ranklist';
import Musiclist from '../../components/musiclist/Musiclist';
import Searchbar from '../../components/searchbar/Searchbar';
import Titlelink from '../../components/titlelink/Titlelink';

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officialList: [],
      globalList: [],
      classNames: '',
      isLoading: true
    };
  }

  getOfficiaRankList() {
    const officialList = [];
    const globalList = [];
    let official = [3, 0, 2, 1, 4, 23, 22];
    let global = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    const promises = official.concat(global).map((idx) => {
      return ranklist.getOfficiaRankList(idx, 3);
    });
    Promise.all(promises).then((item) => {
      item.forEach((item, index) => {
        if (index < 7) {
          let top3 = [];
          item.data.playlist.tracks.forEach(track => {
            top3.push({
              title: track.name,
              singer: track.ar[0].name,
              album: track.al.name
            });
          });
          officialList.push({
            img: item.data.playlist.coverImgUrl,
            top3: top3
          })
        } else {
          globalList.push({
            picUrl: item.data.playlist.coverImgUrl,
            name: item.data.playlist.name
          });
        }
      });
      this.setState({
        officialList: officialList,
        globalList: globalList,
        isLoading: false
      });
    });
  }

  componentWillMount() {
    this.getOfficiaRankList();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classNames: 'fade-in'
      })
    }, 0);
  }

  render() {
    return (
      <div className={`page fade-page ${this.state.classNames}`}>
        <Searchbar left='back' right='station' title='排行榜' />
          <div className="other-subpage">
            {
              this.state.isLoading ?
                <div className="loading" >
                  <img src={require('../../../static/images/loading.gif')} />
                </div> :
                <div>
                  <Titlelink title='云音乐官方榜'></Titlelink>
                  <Ranklist list={this.state.officialList}></Ranklist>
                  <Titlelink title='全球榜'></Titlelink>
                  <Musiclist cols='3' list={this.state.globalList}></Musiclist>
                </div>
            }
          </div>
      </div>
    );
  }
}

export default Rank;