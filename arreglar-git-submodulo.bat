@echo off
title Subir Cambios a GitHub y Publicar Web
echo ======================================================
echo   Guardando y subiendo el nuevo flujo de GitHub Pages...
echo ======================================================
echo.

cd /d "%~dp0"

git add -A
git commit -m "fix(ci): fix github pages workflow working-directory and build"
git push

echo.
echo ======================================================
echo   Listo! Cambios subidos a GitHub.
echo   GitHub Actions compilara y publicara la web ahora.
echo ======================================================
pause
