(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "เปิดเมนู");
    }));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const contact = String(data.get("contact") || "").trim();
      const service = String(data.get("service") || "").trim();
      const details = String(data.get("details") || "").trim();
      const subject = encodeURIComponent(`สอบถามบริการ ${service} - ${name}`);
      const body = encodeURIComponent(
        `สวัสดี Belt & Clean Solutions\n\nชื่อผู้ติดต่อ/บริษัท: ${name}\nข้อมูลติดต่อกลับ: ${contact}\nหัวข้อที่สนใจ: ${service}\nรายละเอียดงาน: ${details || "-"}\n\nขอบคุณครับ/ค่ะ`
      );
      const status = document.querySelector("#form-status");
      if (status) status.textContent = "กำลังเปิดแอปอีเมลของคุณ หากไม่มีอีเมลเปิดขึ้น ให้ติดต่อทีมงานผ่านช่องทางที่บริษัทกำหนด";
      // Replace this address with the company's real sales email before publishing.
      window.location.href = `mailto:REPLACE-WITH-SALES-EMAIL@example.com?subject=${subject}&body=${body}`;
    });
  }
})();
