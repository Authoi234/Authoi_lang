import * as fs from "fs/promises";

export enum TokenType {
    // literal types
    Nothing,
    Number,
    Identifier,

    // grouping * operators
    Equals,
    OpenParen, CloseParen,
    BinaryOperator,
    EOF,

    // keywords
    Declare
}

const KEYWORDS: Record<string, TokenType> = {
    "Set": TokenType.Declare
}

export interface Token {
    value: string;
    type: TokenType;
}

function isAlpha(c: number): boolean {
    return (c | 32) >= 97 && (c | 32) <= 122;
}

function isInteger(char: string): boolean {
    const c = char.charCodeAt(0);
    return c >= 48 && c <= 57;
}

function isSkippable(char: string): boolean {
    return char == ' ' || char == '\n' || char == '\t';
}

export const tokenize = (sourceCode: string): Token[] => {
    const tokens: Token[] = [];
    const src = sourceCode.split("");

    while (src.length > 0) {
        if (src[0] == '(') {
            tokens.push({ value: src.shift()!, type: TokenType.OpenParen })
        }
        else if (src[0] == ')') {
            tokens.push({ value: src.shift()!, type: TokenType.CloseParen })
        }
        else if (src[0] == '+' || src[0] == '-' || src[0] == '*' || src[0] == '/' || src[0] == '%') {
            tokens.push({ value: src.shift()!, type: TokenType.BinaryOperator })
        }
        else if (src[0] == '=') {
            tokens.push({ value: src.shift()!, type: TokenType.Equals })
        }
        else {
            // multicharacter tokens
            if (isInteger(src[0])) {
                let num = "";
                while (src.length > 0 && isInteger(src[0])) {
                    num += src.shift();
                }
                tokens.push({ value: num, type: TokenType.Number });
            }
            else if (isAlpha(src[0].charCodeAt(0))) {
                let ident = "";
                while (src.length > 0 && isAlpha(src[0].charCodeAt(0))) {
                    ident += src.shift();
                }
                const reserved = KEYWORDS[ident];
                if (reserved == undefined) {
                    tokens.push({ value: ident, type: TokenType.Identifier });
                } else {
                    tokens.push({ value: ident, type: reserved });
                }
            }
            else if (isSkippable(src[0])) {
                src.shift();
            }
            else {
                console.log("Unrecognized character || FOUND: " + src[0]);
                process.exit(1);
            }
        }
    }
    tokens.push({ value: "EndOfFile", type: TokenType.EOF }); 
    return tokens;
};