import React, { Component } from 'react';
import axios from 'axios';
import { Config } from '../Config';
import PostMostVisitedComponent from './PostMostVisitedComponent';

export default class MainCompoenent extends Component {
    /**
     * Functions
     */

    changeValue = (e) => {
        this.setState({ category: e.target.value });
        this.loadpostsMoreReads();
    }

    loadpostsMoreReads = () => {
        //Fetch Articles
        const posts = axios.get(Config.url)
        posts.then(result => {
            //FIlter by Category or todos
            let filtered = result.data.pages.filter(post => {
                if (this.state.category == 'todas') {
                    return post.stats.article > 0;
                } else {
                    return post.stats.article > 0 && post.sections.includes(this.state.category);
                }
            });

            // Filter More visits
            let ordered = filtered.sort(f => { return f.stats.visits });

            // Five posts
            this.setState({ posts: ordered.slice(0, 5) })
        })
    }



    async componentDidMount() {
        this.loadpostsMoreReads();
    }

    state = {
        category: 'todas',
        posts: []
    }


    render() {
        return (
            <section id="content">
                <div className="widget-content">
                    <select onChange={this.changeValue} value={this.state.category}>
                        <option value="todas">Todas</option>
                        <option value="noticias">Noticias</option>
                        <option value="guayaquil">Guayaquil</option>
                        <option value="deportes">Deportes</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="la revista">La Revista</option>
                    </select>

                    <div className="most-view-box">
                        <h3>Lo Más Leído</h3>
                        <ul>
                            {
                                this.state.posts.map((note, idx) => (
                                    <PostMostVisitedComponent key={idx} num={(idx + 1)} title={note.title} path={note.path} />
                                ))
                            }
                        </ul>
                    </div>

                </div>

            </section>
        )
    }

}