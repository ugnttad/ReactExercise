import React, { useState, useEffect } from "react";
import { Card, Spinner, Alert, Container } from "react-bootstrap";

const UserPosts = ({ userId }) => {
    // Bước 1: Khởi tạo state cho posts
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Bước 2: Lấy dữ liệu khi component mount hoặc userId thay đổi
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");

            try {
                // Gọi API JSONPlaceholder để lấy danh sách bài viết
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
                );

                if (!response.ok) {
                    throw new Error("Lỗi khi lấy dữ liệu");
                }

                const data = await response.json(); // Chuyển dữ liệu thành JSON
                setPosts(data); // Cập nhật state posts với dữ liệu lấy được
            } catch (error) {
                console.error("Có lỗi xảy ra:", error);
                setError("Không thể tải dữ liệu. Vui lòng thử lại!");
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Gọi hàm fetchData
    }, [userId]); // useEffect sẽ được gọi lại khi userId thay đổi

    // Bước 3: Render danh sách các bài viết
    if (loading) {
        return (
            <Container className="text-center mt-4">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Đang tải...</span>
                </Spinner>
                <p className="mt-2">Đang tải dữ liệu...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <h3>Danh sách bài viết của người dùng {userId}</h3>
            <div className="row">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="col-md-6 col-lg-4 mb-3">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title className="text-primary">
                                        {post.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {post.body}
                                    </Card.Text>
                                    <small className="text-muted">Post ID: {post.id}</small>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <Alert variant="info">
                            Không có bài viết nào để hiển thị.
                        </Alert>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default UserPosts;