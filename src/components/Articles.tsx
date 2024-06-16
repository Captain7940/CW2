import { Card,  Row, Col, Flex} from "antd";
import articles from './articles.json'
import { Link } from 'react-router-dom';

const Articles = ()=> {
    return(
        <>
            <Flex justify="space-evenly" wrap="wrap" gap="middle"><Row>
                {
                  articles && articles.map(({id, title, info, variety, gender, age, imageurl})=> (
                    <Col key={id}>
                      <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
                      <Card
                        style={{ width: 300, height: 350, marginTop: 10, marginRight: 10}}
                        cover={<img alt="example" src={imageurl} style={{ maxWidth: '100%', height: 'auto' }} />}
                        hoverable
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div>
                            <h3>{title}</h3>
                            <h3>{gender}</h3>
                          </div>
                          <div>
                            <h3>{variety}</h3>
                            <h3>{age}</h3>
                          </div>
                        </div>
                      </Card>
                        </Link>
                    </Col>
                  ))
                }
              </Row>
            </Flex>
        </>
    )
}

export default Articles;