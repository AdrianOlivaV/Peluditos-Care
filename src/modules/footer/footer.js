

const insertMainFooter = (footer) =>{
    footer.innerHTML = `<footer class="bg-footer text-dark pt-5">
        <div class="container px-2">
            <div class="row">
                <div class="col-1">
                    <img src="../../../public/images/paws_footer.svg" alt="huellas de gatitos">
                </div>
                <div class="col-5 col-lg-3">
                    <h3 class="fw-bold">Peluditos Care</h3>
                    <p class="pt-2">
                        Av. P.º de la Reforma 21, Colonia Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX
                    </p>
                </div>
                <div class="col">
                    <h4>Seguridad y Privacidad</h4>
                    <ul class="list-unstyled pt-2">
                        <a href="#"><li class="py-1">Link</li></a>
                        <a href="#"><li class="py-1">Link</li></a>
                        <a href="#"><li class="py-1">Link</li></a>
                        <a href="#"><li class="py-1">Link</li></a>
                    </ul>
                </div>
                <div class="col">
                    <h4>Confianza y Transparencia</h4>
                    <ul class="list-unstyled pt-2">
                        <a href="#"><li class="py-1">Link</li></a>
                        <a href="#"><li class="py-1">Link</li></a>
                        <a href="#"><li class="py-1">Link</li></a>
                        <a href="#"><li class="py-1">Link</li></a>
                    </ul>
                </div>
                <div class="col-6 col-lg-3">
                    <h4>Nuestras Redes</h4>
                    <div class="social-media pt-2">
                        <a href="#" class="text-light fs-2 me-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-light fs-2 me-3"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-light fs-2 me-3"><i class="bi bi-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="px-5 d-sm-flex justify-content-around py-1">
            <p>© 2025 Peluditos Care. Todos los derechos reservados. </p>
            <p>
                <a class="text-light text-decoration-none pe-4" href="#">Términos de uso</a>
                <a class="text-light text-decoration-none" href="#"> Política de privacidad</a>
            </p>
        </div>
    </footer>`;
}

export { insertMainFooter};