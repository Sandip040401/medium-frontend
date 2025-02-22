import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>loading...</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>; // Handle case where blog is undefined
    }

    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    );
};
