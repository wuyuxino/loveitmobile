import React, { Component } from 'react';

class ArticleDetail extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    console.log('123',this.props.history.location.state)
    return (
      <div>
        <div
          style={{
            overflowX: 'hidden',
            paddingLeft: 60,
            paddingRight: 60,
            marginTop: 20,
          }}
          dangerouslySetInnerHTML={{
            __html: this.props.history.location.state.info.attributes.content ? this.props.history.location.state.info.attributes.content : '加载失败请返回重新加载'
          }}>
        </div>
      </div>
    );
  }
}

export default ArticleDetail;