import React from "react";
import Icon from "@/Components/Icon";

const TimeLine = (props) => {
    const { auth, posts } = props;
    
    return (
        <div className="p-12">
            <div>
                <div>
                    { posts.map((post) => (
                        <div key={post.id} className="my-3">
                            <p>{ post.author.name }</p>
                            <Icon user={ post.author }/>
                            <p>{ post.body }</p>
                            <p>{ post.category.name }</p>
                            <p>コメント数：{ post.comments.length }</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
}

export default TimeLine;