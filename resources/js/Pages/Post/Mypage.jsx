import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Mypage = (props) => {
    const { auth, posts } = props;
    console.log(auth);
    
    return (
        <Authenticated auth={auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    マイページ
                </h2>
            }>
            
            <div className="p-12">
                <h1>{ auth.user.name }</h1>
                <div>
                    <div>
                        { posts.map((post) => (
                            <div key={post.id} className="my-3">
                                <p>{ post.body }</p>
                                <p>{ post.category.name }</p>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Mypage;