import React, { Component } from 'react';
import Parse from 'parse'

class Home extends Component {
  constructor(){
    super()
    this.state={
      articleList:[]
    }
  }
  getArticle = () => {
    // get article list
		let queryUrl = Parse.Object.extend('Community')
		let queryDatas = new Parse.Query(queryUrl)
		queryDatas.find().then(req => {
      console.log(req)
			this.setState({
				articleList: req
			})
		}).catch(err => {
		})
  }

  componentDidMount() {
    this.getArticle()
  }
  
  render() {
    const { articleList } = this.state
    return (
      <div>
        {
          articleList.map((i,n)=>{
            return(
              <div 
                onClick={()=>{
                  this.props.history.push({
                    pathname: '/articledetail',
                    state: {
                      info: i
                    }
                  })
                }}
                class="card" 
                style={{width: '100%'}}>
                <img src={i.attributes.cover._url} class="card-img-top" alt="..." />
                <div class="card-body">
                <p class="card-text">{i.attributes.subtitle}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Home;