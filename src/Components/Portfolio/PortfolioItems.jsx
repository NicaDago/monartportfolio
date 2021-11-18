import React from 'react'
import styled from 'styled-components';

function PortfolioItems({menuItem}) {
    return (
        <PortfolioItemsStyled >
            {    
                menuItem.map((item)=>{
                    return <div className="container">   
                    <div className="mainCard"> 
                    <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="Portfolio Project"/>
                                <ul>
                                    <li>
                                        <a target='_blank' href={item.link1}>
                                            {item.link2}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mainContent"> 
                            <h3 className="mainHeading">
                            {item.title}</h3>
                            <div className="mainLine"></div>
                            <p className="mainParagraph">{item.text}</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                })
            }
        </PortfolioItemsStyled>
    )
}

const PortfolioItemsStyled = styled.div`
display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-left: -3.5rem;
    width: 100%;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;

.mainCard {
  width: 100%;
  height: 35rem;
  margin: 2rem;
  box-shadow: 0 0 5px 1px var(--main-title);
  border-radius: 8px;
}

.grid-item{
    .portfolio-content{
        display: block;
        position: relative;
        overflow: hidden;
        h6{
            font-size: 1.5rem;
        }
        img{
            width: 100%;
            height: 40vh;
            object-fit: cover;
            box-shadow: 10px 10px 5px var(--main-title);
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            margin: 0;
            padding: 0;
        }
        ul{
            transform: translateY(-600px);
            transition: all .4s ease-in-out;
            position: absolute;
            left: 50%;
            top: 40%;
            opacity: 0;
            li{
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                margin: 0 .5rem;
                transition: all .4s ease-in-out;
                &:hover{
                    background-color: green;
                }
                a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                }
            }
    }
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }

            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: #ebe2db;
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }

                    li:hover{
                        svg{
                            color: var(--sidebar-border-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    height: 25rem;
                    width: calc(100% - 4%);
                    background-color: rgba(29, 29, 27, 0.9);
                    opacity: 0.9;
                    transform-origin: left;
                    transition: all .4s ease-in-out;
                }
            }
        }
    }

.mainContent {
  padding: 2rem;
}

.mainHeading {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  color: var(--main-title);
  text-shadow: var(--main-title-shadow);
}

.mainLine {
  width: 15rem;
  height: 0.1rem;
  margin: auto;
  background-color: var(--main-title);
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.mainParagraph {
  font-size: 1rem;
  color: #1b1b1b;
}

//----------------------MEDIA QUERIES----------------   
             //---------tablet-----------
@media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);

        .mainParagraph {
        font-size: 0.8rem;
        }

        .mainCard {
        height: 32rem;
        width: 80%;
        margin-left: 2rem;
        }

        
.grid-item{
    .portfolio-content{
        h6{
            font-size: 0.5rem;
        }
        img{
            height: 20vh;
        }
        ul{
            li{
                padding: 1rem;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                margin: 0 .5rem;
            }
    }
}
}

        .portfolio-image:hover{
                ul{
                    svg{
                        font-size: 1rem;
                    }
                }
                &::before{
                    height: 20rem;
                }
            }

            //---------phone-----------
@media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);

        .mainParagraph {
        font-size: 0.8rem;
        }

        .mainCard {
        height: 27rem;
        width: 80%;
        margin-left: 4.5rem;
        }

        
.grid-item{
    .portfolio-content{
        h6{
            font-size: 0.5rem;
        }
        img{
            height: 20vh;
        }
        ul{
            li{
                padding: 1rem;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                margin: 0 .5rem;
            }
    }
}
}

        .portfolio-image:hover{
                ul{
                    svg{
                        font-size: 1rem;
                    }
                }
                &::before{
                    height: 20rem;
                }
            }
} 
}
`;

export default PortfolioItems;
