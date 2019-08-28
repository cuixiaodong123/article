import React, { Component } from "react";
import { Icon } from 'antd';

class Demo extends Component {
  render() {
    const { title, blockName, ownerName, viewCount, replyCount, voteCount, creationDate, content } = this.props;
    return (
      <div className="article-container">
          <h1>{title ? title : ''}</h1>
          <div className='subheader'>
            {blockName ? <span>板块:{blockName}</span> : ''}
            {ownerName ? <span>作者:{ownerName}</span> : ''}
            {viewCount ? <span><Icon type="eye" /><span>{viewCount}</span></span> : ''}
            {replyCount ? <span><Icon type="message" /><span>{replyCount}</span></span> : ''}
            {voteCount ? <span><Icon type="like" /><span>{voteCount}</span></span> : ''}
            {creationDate ? <span>发表于:{creationDate}</span> : ''}
          </div>
          <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}

export default Demo;
