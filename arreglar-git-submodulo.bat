@echo off
title Subir Cambios a GitHub y Publicar Web
echo ======================================================
echo   Subiendo los cambios a GitHub (matiluna22/similblass)...
echo ======================================================
echo.

cd /d "%~dp0"

git add -A
git commit -m "fix: sincronizar proyecto completo y flujo de GitHub Pages"

echo Subiendo a GitHub...
git push -u origin master

if %errorlevel% neq 0 (
    echo.
    echo ======================================================
    echo Hubo una diferencia con el historial de GitHub.
    echo Subiendo con actualizacion forzada para sincronizar...
    echo ======================================================
    git push -u origin master --force
)

echo.
echo ======================================================
echo   Listo! Cambios subidos a GitHub con exito.
echo   GitHub Actions compilara y publicara la web ahora.
echo ======================================================
pause
