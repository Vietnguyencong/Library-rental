import React from "react";

class Members extends React.Component {
    render(){
        return (
            <div class="ui three column grid" style={{margin:"10px"}}>
                <div class="column">
                    <div class="ui fluid card" >
                    <div class="ui move up reveal">
                    <img class="visible content" src="https://semantic-ui.com/images/avatar/large/daniel.jpg"/>
                       <img class="hidden content" src="https://drive.google.com/uc?id=19j6jzey729IKKOZs8-Vcwz01-kskFbW_"/> 
                    </div>
                    <div class="content">
                        <a class="header">Isaac</a>
                        <div classs="description">
                            "This is my description" 
                        </div>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                    <div class="ui move up reveal">
                    <img class="visible content" src="https://semantic-ui.com/images/avatar2/large/matthew.png"/>
                        <img class="hidden content" src="https://drive.google.com/uc?id=14LwwgSZTvPWfTGtBS7HcZ1p-82IdY-__"/>
                    </div>
                    <div class="content">
                        <a class="header">Aiden</a>
                        <div classs="description">
                        "There is no Ctrl-Z in life."
                        </div>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                    <div class="ui move up reveal">
                    <img class="visible content" src="https://semantic-ui.com/images/avatar2/large/kristy.png"/>
                        <img class="hidden content" src="https://drive.google.com/uc?id=1XTq2KhkrXwlI9eASNUm8MQwZ8m4xaB6H"/>
                    </div>
                    <div class="content">
                        <a class="header">Yoseline </a>
                        <div classs="description">
                        "Hello World."
                        </div>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                    <div class="ui move up reveal">
                    <img class="visible content" src="https://semantic-ui.com/images/avatar/large/christian.jpg"/>
                        <img class="hidden content" src="https://media-exp1.licdn.com/dms/image/C4E03AQHjObBi5MlDoQ/profile-displayphoto-shrink_800_800/0/1592377794130?e=1624492800&v=beta&t=IoMmJ9ACgdBMtpEyX8K8HDAfpQmwnGaE_m4RGDoIlBU"/>
                    </div>
                    <div class="content">
                        <a class="header">Minh</a>
                        <div classs="description">
                        “It works on my machine.”
                        </div>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui fluid card">
                    <div class="ui move up reveal">
                    <img class="visible content" src="https://semantic-ui.com/images/avatar2/large/elyse.png"></img>
                        <img class="hidden content" src="https://drive.google.com/uc?id=1trg6fLVCA0dbOlIyFBAW37hQvJoStD6G"></img>
                    </div>
                    <div class="content">
                        <a class="header">Viet</a>
                        <div classs="description">
                            "Niceee. This is solid!"
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Members

//https://myporfolio-bucket.s3.amazonaws.com/images/selfimage.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATDIOQ4ZCHCZZPCG5%2F20210418%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T233003Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d85fa39f85421b325bf15b791a8f598f1395ae4a7e32d07661f8ef413b4f4081