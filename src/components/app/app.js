import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label:'Going to learn React',important:false,liked:false,id:1},
                {label:'It is so good',important:false,liked:false,id:2},
                {label:'I need a break',important:false,liked:false,id:3}
            ],
            term:'',
            filter: ''
        }
        this.maxId = 4
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onImportantItem = this.onImportantItem.bind(this);
        this.onLikeItem = this.onLikeItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }
    onImportantItem(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important:!old.important};
            const newArr = [...data.slice(0,index),newItem, ...data.slice(index+1)];

            return {
                data:newArr
            }
        });
    }
    onLikeItem(id) {
        this.setState(({data}) => {
             const index = data.findIndex(elem => elem.id === id);
             const old = data[index];
             const newItem = {...old, like:!old.like };
             const newArr = [...data.slice(0,index),newItem, ...data.slice(index+1)];
 
             return {
                 data:newArr
             }
        });
 
    }
    onUpdateSearch(term){
        this.setState({term});
    }
    onFilterSelect(filter){
        this.setState({filter});
    }
    filterPosts(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }
    searchPosts(items, term){
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0,index), ...data.slice(index+1)];
            return {
                data:newArr
            }
        });
    }
    addItem(body){
       const newItem = {
           label:body,
           important:false,
           liked:false,
           id:this.maxId++
       }
       this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data:newArr
            }
       });
    }
    render() {
        const {data, term, filter} = this.state;
        const likes = data.filter(item => item.like).length,
              posts = data.length;
        const visiblePosts = this.filterPosts((this.searchPosts(data, term)),filter)
        return (
            <div className="app">
                <AppHeader
                    likes={likes}
                    allPosts={posts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleLiked={this.onLikeItem}
                    onToggleImportant={this.onImportantItem}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}




   



