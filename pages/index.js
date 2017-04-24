import React from 'react'
import posts from '../data/posts'
import Link from 'next/link'
import AuthService from '../utils/AuthService'

export default class extends React.Component {
    static getInitialProps() {
        return { posts: posts }
    }

    constructor(props) {
        super(props)
        this.state = { logginIn: false }
    }

    componentDidMount() {
        this.auth = new AuthService('c0dPqZTahGrJ4R4sbrZp4YvaY8jTsSZ5', 'maverick5.auth0.com' );
        this.setState({ loggedIn: this.auth.loggedIn() })
        // instance of lock
        this.lock = this.auth.getLock();
        this.lock.on('authentication', () => {
            this.setState({ loggedIn: this.auth.loggedIn() })
        });
    }

    login() {
        this.auth.login()
    }

    render() {

        const loginButton = this.state.loggedIn ? <div>Hello</div> : <button onClick={this.login.bind(this)}>login</button>;

        return (
            <div>
                <div className='header'>
                    <script src="https://cdn.auth0.com/js/lock/10.5/lock.min.js"></script>
                    { loginButton}

                    <h3>NEXTHRONE - THE REVELATION OF GAME OF THRONES' CHARACTERS</h3>
                </div>
                <table className='table'>
                    <thead>
                      <tr>
                          <th className='th'>Character</th>
                          <th className='th'>Real Name</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.posts.map((post, i) => (
                            <tr key={i}>
                                <td className='td'>{ post.codeName }</td>
                                <td className='td'>
                                    { this.state.loggedIn
                                        ? <Link href={`/account?id=${post.id}`}>{ post.realName }</Link>
                                        : <div> 'you need to login' </div> }
                                </td>
                            </tr>
                            ))
                    }
                    </tbody>
                </table>
                <style jsx>{`
                    .th {
                        background: #00cccc;
                        color: #fff;
                        textTransform: 'uppercase';
                        fontSize: 12px;
                        padding: 12px 35px;
                    }
                    .header {
                        font: 15px Monaco;
                        textAlign: center;
                    }
                    .table {
                        fontFamily: Arial;
                        margin: 25px auto;
                        borderCollapse: collapse;
                        border: 1px solid #eee;
                        borderBottom: 2px solid #00cccc;
                    }
                    .td {
                        color: #999;
                        border: 1px solid #eee;
                        padding: 12px 35px;
                        borderCollapse: collapse;
                    }
                    .list {
                        padding: 50px;
                        textAlign: center;
                    }
                    .photo {
                        display: inline-block;
                    }
                    .photoLink {
                        color: #333;
                        verticalAlign: middle;
                        cursor: pointer;
                        background: #eee;
                        display: inline-block;
                        width: 250px;
                        height: 250px;
                        lineHeight: 250px;
                        margin: 10px;
                        border: 2px solid transparent;
                        'hover': {
                            borderColor: blue;
                        }
                `}</style>
            </div>
        )
    }

}

