import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import TimeLine from "@/Components/TimeLine";

const Mypage = (props) => {
    const { posts, user } = props;
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ホーム
                </h2>
            }>
            
            <TimeLine posts={ posts }/>
            
        </Authenticated>
    );
}

export default Mypage;