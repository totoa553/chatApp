import Router from "next/router";
import BasicHead from "../components/atom/head";
import basicData from "../components/atom/basicData";

import BasicButton from "../components/atom/button";
import BasicParagraph from "../components/atom/basicP";
import TitleLogo from "../components/atom/logo";
import CreateNow from "../components/compo/createNow";

import styles from "../styles/root.module.css";
import MediaQuery from "react-responsive";

import Tooltip from "@material-ui/core/Tooltip";


export default function Home() {
    return (
        <div className={ styles.body }>
            <BasicHead />

            <MediaQuery query="(min-width: 768px)">
                <main className={ styles.body }>
                    <div className={ styles.titlePC }>
                        <TitleLogo />
                    </div>

                    <div className={ styles.description }>
                        <BasicParagraph>
                            { basicData.description }
                        </BasicParagraph>
                    </div>
                    <div className={ styles.buttonArea }>
                        <Tooltip title={ basicData.signup }>
                            <div className={ styles.button }>
                                    <BasicButton
                                        fullWidth ={ true }
                                        onclick   ={() => Router.push("/signup")}
                                    >登録</BasicButton>
                            </div>
                        </Tooltip>
                        <Tooltip title={ basicData.signin }>
                            <div className={ styles.button }>
                                <BasicButton
                                    fullWidth ={ true }
                                    onclick   ={() => Router.push("/signin")}
                                >ログイン</BasicButton>
                            </div>
                        </Tooltip>
                    </div>
                    <CreateNow />
                </main>
            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <main className={ styles.body }>
                    <div className={ styles.titleSP }>
                        <TitleLogo />
                    </div>
                    <div className={ styles.description }>
                        <BasicParagraph>
                            { basicData.description }
                        </BasicParagraph>
                    </div>
                    <div className={ styles.buttonArea }>
                        <Tooltip title={ basicData.signup }>
                            <div className={ styles.button }>
                                    <BasicButton
                                        fullWidth ={ true }
                                        onclick   ={() => Router.push("/signup")}
                                    >登録</BasicButton>
                            </div>
                        </Tooltip>
                        <Tooltip title={ basicData.signin }>
                            <div className={ styles.button }>
                                <BasicButton
                                    fullWidth ={ true }
                                    onclick   ={() => Router.push("/signin")}
                                >ログイン</BasicButton>
                            </div>
                        </Tooltip>
                    </div>
                    <CreateNow />
                </main>
            </MediaQuery>
        </div>
    );
}