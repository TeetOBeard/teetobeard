```asm
    .global _start
    .text
_start:
    MOV  R0, #1          
    LDR  R1, =msg        
    LDR  R2, =msg_len    
    MOV  R7, #4         
    SWI  0

    MOV  R0, #0          
    MOV  R7, #1          
    SWI  0

    .data
msg:
    .asciz
```
```python
    "Olá! Eu sou sou o Teet (ou Thiago, se preferir).

    Desenvolvedor com experiência em construir bots e automatizações para tornar processos mais ágeis e eficientes.

    Tenho mais de 2 anos de experiência, com diversos projetos finalizados com sucesso para empresas e indivíduos.

    Me contate pelo Discord ou Telegram, caso tenha interesse:

```
```javascript
    @teetobeard
```
```asm
    "
msg_end:
    .equ msg_len, msg_end - msg - 1
```
