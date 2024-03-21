import style from "./Company.module.css"

function Company() {
    
    return (
        <div className={style.div}>
        <div className={style.company}>
            <img 
            className={style.companyImg}
            alt=""
            src="1-550x416 1.png"
            />
        </div>
        <span>
            &nbsp;
        </span>
        <div className={style.aboutWrapper}>
            <div className={style.aboutContainer}>
            <p className={style.p}>
            <b>회사소개</b>
            </p>
            <span>
            &nbsp;
            </span>
            <p className={style.a}>
            <span>
                Humming Connect는 여러분의 문화와 예술공간을 연결해드립니다.
            </span>
            </p>
            <span>
                &nbsp;
            </span>
            <p className={style.b}>
                <span>
                    전문가부터 일반인까지 대중이 참여하고 소통하는 공간 누구 하나 차별되지 않고 다양한 서비스를 경험하실수 있습니다.
                </span>
            </p>
            <p>
                <span className={style.c}>
                    그림들을 사고 팔며 본인이 그린 작품을 팔수도 있고 구매자와 판매자와 대화할 수 있는 허밍 연결 커뮨니티 시스템까지
                </span>
            </p>
            <p>
                <span className={style.d}>
                    지쳤을 때 힐링할수 있고 지금껏 본적 없는 새로운 일들을 경험 하세요
                </span>
            </p>
            <p>
                <span className={style.e}>
                    지금 찾아오세요 Humming Connect
                </span>
            </p>
            <div className={style.companyLogo}>
                <img 
                alt=""
                src="Group 84.png"
                />
            </div>
        </div>
    </div>
    
    <div className={style.functionImfomationParent}>
        <div className={style.functionImformation}>
            <div className={style.wrapper}>
                <div className={style.div1}>
                    <p className={style.p5}>
                        <b>미술품 거래정보 제공</b>
                    </p>
                    <p className={style.blankline5}>
                        <b>&nbsp;</b>
                    </p>
                    <p className={style.blankline6}>
                        <b>&nbsp;</b>
                    </p>
                    <p className={style.p6}>
                        개인 작품 및 유명 작품을 다루다보니 수많은 그림들과 작가분들을
                        만나보실 수 있습니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    
    );
}
export default Company;