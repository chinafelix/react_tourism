import React from 'react'
// import {renderRoutes} from "react-router-config";
import Header from '../../components/header'
import Nav from '../../components/nav'
import './home.scss'
import https from '../../static/js/api'
import Carousel from 'antd/lib/carousel';
import Loading from '../../components/LoadingImg'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      banners: [],
      scienceInfo: {},
      lists: [],      //新闻资讯
    }
  }

  componentWillMount() {
    this.getBanner();
    this.getScienceData();
    this.getNews();
  }


  render(){
    return (
      <div className='home'>
        <Header title='居庸关景区'></Header>
        <div className="content">
          <Carousel autoplay>
            {this.state.banners.map(item =>{
              return <img src={item.coverUrl} alt="" key={item.id} />
            })}
          </Carousel>
          {/*天气与须知*/}
          <div className="weaher_notice">
            <div className="weather_box">
              <div className="title">
                <div className='top'>
                  <p className='middle'>{this.state.scienceInfo.name}</p>
                  <p>{this.state.scienceInfo.type}</p>
                  <p>晴</p>
                  <p>20~25℃</p>
                  <p>优</p>
                </div>
                <div className="bottom">
                  浙江省杭州市滨江区
                </div>
              </div>
              <div className="phone"></div>
            </div>

            <div className="notice">
              <div className="item">
                <div>
                  <p>景区须知</p>
                  <p className='mini'>开放时间，入园须知</p>
                </div>
                <p className='arr'></p>
              </div>
              <div className="item">
                <div>
                  <p>景区介绍</p>
                  <p className='mini'>景区介绍，开放景点介绍</p>
                </div>
                <p className="arr"></p>
              </div>
            </div>
          </div>


          {/*景区资讯*/}
          <div className="news_box">
            <div className="title">
              <p>景区资讯</p>
              <div>
                <p>更多</p>
                <p className='arr'></p>
              </div>
            </div>

            <div className="news_list">
              {
                this.state.lists.map(item =>{
                  return (
                    <div className="item" key={item.id}>
                      <Loading img={item.coverUrl}></Loading>
                      <div className="info">
                        <p className='hd_news'>{item.title}</p>
                        <p className='ctx_news small'>{`${item.subject.slice(0,30)}...`}</p>
                        <p className='small'>{item.createTime}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>
        <Nav active={1}></Nav>
      </div>
    )
  }

  getBanner(){
    https.getBanner().then(res =>{
      this.setState({
        banners: res.data
      })
    })
  }
  getScienceData(){
    https.getScienceData().then(res =>{
      this.setState({
        scienceInfo: res.data
      })
    })
  }
  getNews(){
    let data = {
      pageIndex: 1,
      pageSize: 99999
    };
    https.getNews(data).then(res=>{
      this.setState({
        lists: res.data.list
      })
    })
  }

}

export default Home;
