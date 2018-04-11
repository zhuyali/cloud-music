import React from 'react';

import Ranklist from '../../components/ranklist/Ranklist';
import Musiclist from '../../components/musiclist/Musiclist';
import Searchbar from '../../components/searchbar/Searchbar';
import Titlelink from '../../components/titlelink/Titlelink';

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officialList: [{
        img: 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=105y105',
        top3: [{
          title: 'We Are The World (Demo)',
          singer: 'Michael Jackson',
          album: 'The Ultimate Collection'
        }, {
          title: 'Let Her Go',
          singer: 'Jasmine Thompson',
          album: 'Bundle of Tantrums'
        }, {
          title: '追光者',
          singer: '岑宁儿',
          album: '夏至未至 影视原声带'
        }]
      }, {
        img: 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=105y105',
        top3: [{
          title: 'We Are The World (Demo)',
          singer: 'Michael Jackson',
          album: 'The Ultimate Collection'
        }, {
          title: 'Let Her Go',
          singer: 'Jasmine Thompson',
          album: 'Bundle of Tantrums'
        }, {
          title: '追光者',
          singer: '岑宁儿',
          album: '夏至未至 影视原声带'
        }]
      }],
      globalList: [{
        img: 'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=105y105',
        desc: '云音乐原创榜'
      }, {
        img: 'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=105y105',
        desc: '云音乐热歌榜'
      }, {
        img: 'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=105y105',
        desc: '云音乐电音榜'
      }, {
        img: 'http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=105y105',
        desc: '云音乐嘻哈榜'
      }, {
        img: 'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=105y105',
        desc: '云音乐ACG音乐榜'
      }, {
        img: 'http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=105y105',
        desc: '日本Oricon周榜'
      }, {
        img: 'http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg?param=105y105',
        desc: 'Beatport全球电子舞曲榜'
      }, {
        img: 'http://p1.music.126.net/0_6_Efe9m0D0NtghOxinUg==/109951163089272193.jpgparam=105y105',
        desc: '英国Q杂志中文版周榜'
      }, {
        img: 'http://p1.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg?param=105y105',
        desc: '台湾Hito排行榜'
      }],
      classNames: ''
    };
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
          <Titlelink title='云音乐官方榜'></Titlelink>
          <Ranklist list={this.state.officialList}></Ranklist>
          <Titlelink title='全球榜'></Titlelink>
          <Musiclist cols='3' list={this.state.globalList}></Musiclist>
        </div>
      </div>
    );
  }
}

export default Rank;