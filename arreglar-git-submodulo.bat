@echo off
title Arreglar Vicky Page en Git y GitHub
echo ======================================================
echo   1. Quitando Vicky page como sub-repositorio...
echo ======================================================
echo.

cd /d "%~dp0"

git rm --cached "Vicky page"
git add "Vicky page"
git add -A
git commit -m "fix: convertir Vicky page en carpeta normal y configurar deploy para GitHub Pages"

echo.
echo ======================================================
echo   2. Subiendo cambios a GitHub...
echo ======================================================
echo.

git push

echo.
echo ======================================================
echo   Listo!
echo   - Vicky page ahora es una carpeta normal de archivos.
echo   - La web se publicara automaticamente en GitHub Pages.
echo ======================================================
pause

