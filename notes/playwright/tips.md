# Playwright tips

## Alias 등록 (`npx playwright` -> `pw`)

!!! tip
매번 명령어 실행시 `npx playwright`를 입력하는 것은 귀찮은 일입니다. 이를 간편하게 `pw`로 줄여서 사용해봅시다.

### Zsh 사용자

```shell
# ~/.zshrc 파일을 엽니다.
vi ~/.zshrc

# 아래 내용을 추가합니다.
alias pw='npx playwright'

# 변경사항을 저장합니다.
:wq

# 변경사항을 적용합니다.
source ~/.zshrc

# 정상 작동을 확인합니다.
pw
```

### Powershell 사용자

1. Powershell을 실행합니다.
2. 다음을 입력합니다.

```powershell
"Set-Alias -Name pw -Value 'npx playwright'" | Out-File -Append $PROFILE
```

3. Powershell을 재시작합니다.
4. 정상 작동을 확인합니다.
