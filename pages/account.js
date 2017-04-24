import React from 'react'
import posts from '../data/posts'
import * as _ from 'lodash'
import Link from 'next/link'
import AuthService from '../utils/AuthService'



export default class extends React.Component {

    componentDidMount() {
        this.auth = new AuthService('c0dPqZTahGrJ4R4sbrZp4YvaY8jTsSZ5', 'maverick5.auth0.com' );
        if(!this.auth.loggedIn()) {
            this.props.url.replaceTo('/')
        }
    }

    render() {

        const item = _.find(posts, { id: this.props.url.query.id })

        return (
            <div className='main'>
                <Link href="/">Home</Link>
                <div className='header'>
                    <h3> NEXTHRONE - THE REVELATION OF GAME OF THRONES' CHARACTERS </h3>
                </div>

                <div className='panel'>
                    <h1 className='heading'>
                        Character: { item.codeName }
                        <br />
                        <br />
                        Real Name: { item.realName }
                        <br />
                        <br />
                        Brief Description:
                        <br />
                        <br />
                        <span>{ item.story }</span>
                    </h1>
                </div>

                <div className="'singlePhoto">
                    <img src={ item.display_src } alt={item.realName} width={500} height={500} />
                </div>
                <style jsx>{`
                    .main {
                        padding: 50px;
                    }
                    .header {
                        font: 15px Monaco;
                        textAlign: center;
                    }
                    .panel {
                        float: right;
                        marginRight: 140px;
                        width: 300px;
                    }
                    .singlePhoto {
                        border: 1px solid #999;
                        width: 500px;
                        height: 500px;
                        float: left;
                    }
                    .heading {
                        font: 15px Monaco
                    }
                `}</style>
            </div>

        )
    }
    }

