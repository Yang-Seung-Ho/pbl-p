import React, { useState, useEffect } from 'react';
import Title from "../components/Title";
import Tabs from "../components/Tabs";
import { useNavigate } from 'react-router-dom';
import TutorialDataService from "../services/tutorial.service";

const Proposal = () => {
    const navigate = useNavigate();
    const [proposals, setProposals] = useState([]);

    // 데이터를 가져오는 함수
    const retrieveProposals = () => {
        TutorialDataService.getAll()
            .then(response => {
                setProposals(response.data);  // 데이터 상태 업데이트
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        retrieveProposals();  // 컴포넌트 마운트 시 데이터 가져오기
    }, []);

    // 등록 버튼 클릭 시 실행될 함수
    const handleRegisterClick = () => {
        navigate("/proposal/submit", {

        });
    };
    

    return (
        <>
            <Title title="제안서 - 작성 방법 및 예시"/>
            <Tabs />

            <>
                {/* 총 개수 + 검색 창 입력 */}
                <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", padding:"8px 24px", borderBottom:"1px solid rgba(0,0,0,0.1)"}}>
                    <div>
                        <span>총 : {proposals.length}개</span> {/* 제안서 개수 표시 */}
                    </div>
                    <div>
                        <input type="text" placeholder="Search..."/>
                        <button>검색!</button>
                    </div>
                </div>

                {/* 테이블 리스트 */}
                <div style={{padding: "4px 24px"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">제목</th>
                                <th scope="col">팀명</th>
                                <th scope="col">팀원</th>
                                <th scope="col">날짜</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {proposals.map((proposal, index) => (                                                             
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{proposal.title}</td>
                                    <td>{proposal.teamName}</td>                                    
                                    <td>{proposal.member}</td>
                                    <td>{new Date(proposal.createdAt).toLocaleDateString('ko-KR')}</td> {/* 날짜 포맷팅 */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* 등록하기 버튼 */}
                    <div style={{textAlign:"right"}}>
                        <button onClick={handleRegisterClick}>등록하기</button>
                    </div>
                </div>
            </>
        </>
    );
}

export default Proposal;
