import React, { Component } from "react";
import Demo from "../../components/demo";
import "../../components/demo/style";

class DemoPage extends Component {
  render() {
    return (
      <div>
        <Demo 
        title='海云标准化平台' 
        blockName='标准化' 
        ownerName='cxd' 
        viewCount='100' 
        replyCount='30' 
        voteCount='50' 
        creationDate='2019-01-01' 
        content='测试内容测试内容测试内容测试内容测试内容测试
        内容测试内容测试内容测试内容测试内容测试内容测试内容测
        测试内容测试内容测试内容测试内容测试内容测试内容测试内
        容测试内容测试内容测试内容测试内容测试内容测试内容测试
        内容测试内容测试内容测试内容测试内容测试内容测试内容测
        试内容测试内容测试内容测试内容测试内容测试内容测试内容
        测试内容测试内容测试内容试内容测试内容测试内容'
        />
      </div>
    );
  }
}

export default DemoPage;
