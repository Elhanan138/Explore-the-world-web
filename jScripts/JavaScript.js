// משתנים גלובליים
fullName = "";
comments = "";
destination = "";
travelers = "";
interestsArray = [];
interests = "";
summaryText = "";
submitBtn = document.getElementById("submitBtn");

// פונקציה להצגת אייקון של היעד שנבחר
function DestinationIcon(selectedDestination) {
    document.querySelectorAll('.destination-icon').forEach(function (icon) {
        icon.style.display = 'none';
    });
    document.getElementById('icon-' + selectedDestination).style.display = 'inline-block';
}

// פונקציה לבדיקת מילוי כל השדות הנדרשים
function checkFormCompletion() {
    fullName = document.getElementById("fullName").value.trim();
    destinationSelected = document.querySelector('input[name="destination"]:checked');
    submitBtn = document.getElementById("submitBtn");

    if (fullName && destinationSelected) {
        submitBtn.classList.add("enabled");
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove("enabled");
        submitBtn.disabled = true;
    }
}

// פונקציה להצגת סיכום הזמנה
function showSummary() {
    fullName = document.getElementById("fullName").value.trim() || "לא הוזן שם";
    comments = document.getElementById("comments").value.trim() || "אין הערות";
    destination = document.querySelector('input[name="destination"]:checked')?.value || "לא נבחר יעד";
    travelers = document.getElementById("travelers").value || "לא נבחר מספר מטיילים";

    //קבלת ערכי תחומי העניין שנבחרו על ידי המשתמש בצ'קבוקס
    interestsArray = Array.from(document.querySelectorAll('input[name="interests"]:checked'));
    interests = "";
    for (i = 0; i < interestsArray.length; i++) {
        interests += interestsArray[i].value;
        if (i < interestsArray.length - 1) {
            interests += ", ";
        }
    }
    interests = interests || "לא נבחרו תחומי עניין";

    // יצירת סיכום המשלב את כל המידע שנאסף מהמילוי של המשתמש בטופס
    summaryText = "<strong>סיכום הזמנה:</strong><br>" +
        "שם מלא: " + fullName + "<br>" +
        "הערות: " + comments + "<br>" +
        "יעד: " + destination + "<br>" +
        "מספר מטיילים: " + travelers + "<br>" +
        "תחומי עניין: " + interests;

    document.getElementById("summary").innerHTML = summaryText;
    document.getElementById("summary").classList.remove("hidden");

    // הודעת אישור עם המידע שהוזן בתיבת הטקסט
    alert("ההזמנה שלך בוצעה בהצלחה, " + fullName + "!");
}

// פונקציה להדגשת תמונות תחומי עניין שנבחרו
function highlightImages() {
    // איפוס כל התמונות לברירת מחדל של חצי שקיפות
    document.querySelectorAll('.interest-image').forEach(function (image) {
        image.classList.remove("highlight");
    });

    // הוספת הדגשה (שקיפות מלאה) לתמונות של תחומי עניין שנבחרו
    document.querySelectorAll('input[name="interests"]:checked').forEach(function (checkbox) {
        document.getElementById("image-" + checkbox.value).classList.add("highlight");
    });
}