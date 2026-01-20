import { Statement, Program, Expr, BinaryExpr, NumericLiteral, Identifier } from './ast.ts';
import { tokenize, Token, TokenType } from './lexer.ts';

export default class Parser {
    private tokens: Token[] = [];
    private not_eof(): boolean {
        return this.tokens[0].type != TokenType.EOF;
    };
    private at() {
        return this.tokens[0] as Token;
    }
    private eat() {
        const prev = this.tokens.shift() as Token;
        return prev;
    }

    private parseStatement(): Statement {
        return this.parseExpr();
    }
    private parseExpr(): Expr {
        return this.parse_additive_expr();
    }

    private parse_additive_expr(): Expr {
        let left = this.parse_multiplicative_expr();
        while (this.at().value == '+' || this.at().value == '-') {
            const operator = this.eat().value;
            const right = this.parse_multiplicative_expr();
            left = {
                kind: "BinaryExpr",
                left: left,
                right: right,
                operator: operator
            } as BinaryExpr;
        }
        return left;
    }

    private parse_multiplicative_expr(): Expr {
        let left = this.parse_primary_expr();
        while (this.at().value == '*' || this.at().value == '/' || this.at().value == '%') {
            const operator = this.eat().value;
            const right = this.parse_primary_expr();
            left = {
                kind: "BinaryExpr",
                left: left,
                right: right,
                operator: operator
            } as BinaryExpr;
        }
        return left;
    }

    private parse_primary_expr(): Expr {
            const tk = this.tokens[0].type

        switch (tk) {
            case TokenType.Identifier:
                return { kind: "Identifier", symbol: this.eat().value } as Identifier;

            case TokenType.Number:
                return { kind: "NumericLiteral", value: parseFloat(this.eat().value) } as NumericLiteral;

            default:
                console.log("Unexpected token found!~", this.at());
                process.exit(1);
        }
    }

    public produceAST(sourceCode: string): Program {
        this.tokens = tokenize(sourceCode);
        const program: Program = {
            kind: "Program",
            body: [],
        }

        while (this.not_eof()) {
            program.body.push(this.parseStatement());
        }

        return program;
    }

}
