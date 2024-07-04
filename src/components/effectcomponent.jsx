import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { Input } from "@mui/material";

// スタイル(CSSベースのモノ)を適用したコンポーネントを作成
//styled()の引数にはコンポーネントを渡す（既存のタグを入れる場合は適切な文字列を渡す）
//styledは関数を返すので関数内にcssベースで記載する
const FormStyled = styled("form")(({ theme }) => ({
    margin: theme.spacing(1),
}
));

const EffectFunc = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({
        lastName: "",
        firstName: "",
    })
    useEffect(() => {
        document.title = `${count}回クリックされました`
    }, [count]);
    return (
        <>
            <p>{`${count}回クリックされました`}</p>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => setCount(prev => prev + 1)}>+1</Button>
                <Button onClick={() => setCount(prev => prev - 1)}>-1</Button>
                <Button onClick={() => setCount(0)}>リセット</Button>
            </ButtonGroup>
            <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
            <FormStyled>
                <Input placeholder="姓" value={name.lastName} onChange={(e) => { setName({ ...name, lastName: e.target.value }) }} />
                <Input placeholder="名" value={name.firstName} onChange={(e) => { setName({ ...name, firstName: e.target.value }) }} />
            </FormStyled>
        </>
    );
};

export default EffectFunc;

