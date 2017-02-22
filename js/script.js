$(".features__item-photos").on("click",function () {
    var wrap=$(this).parent(".features__item-photos-wr");
    var wrclone= wrap.clone();


        wrclone.insertAfter(".mainwrapper");
        $(wrclone[0]).attr("class","popup clone");
        $(".mainwrapper").attr("class","mainwrapper blur");
        $(wrclone[0]).children(".features__item-photos").eq(0).attr("class","popup-img");
    $(".popup-img").on("click",function () {
        console.log(this);
        $(".clone").detach();
        $(".blur").attr("class","mainwrapper");
    });
});

