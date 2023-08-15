HTMLS = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Newsletter</title>
    <style>
      .main-container {
        background-color: #f8dcd8;
        display: flex;
        padding: 50px;
        flex-direction: column;
        align-items: center;
      }
      .main-text {
        color: #2b0c08;
        text-align: center;
        padding: 25px 15rem;
        line-height: 2rem;
      }
      .gif-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-bottom: 3rem;
      }
      .gifs {
        width: 100px;
        height: 200px;
      }
      .btn {
        margin-top: 10rem;
        padding: 0.5rem 1.25rem;
        background-color: #f7343d;
        color: #2b0c08;
        border: 3px solid #f7343d;
        border-radius: 10px;
      }
      .btn:hover {
        cursor: pointer;
        background-color: #d82730ca;
        border: 3px solid #d82730ca;
      }
      .btn:active {
        background-color: rgb(230, 182, 182);
        border: 3px solid rgb(230, 182, 182);
      }
      .signture-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .signture-container > p {
        margin: 7px 0;
        color: #2b0c08;
      }
      .website-link {
        text-decoration: none;
        color: #f7343d;
      }
      .website-link:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="main-container">
      <h1 style="color: #2b0c08">Welcome to Newsletter!</h1>
      <div class="text-container">
        <p class="main-text">
          Welcome to
          <a class="website-link" href="http://localhost:5173">PokeInfo</a>,
          your ultimate source for all things Pokémon! I want to express my
          heartfelt gratitude for joining my newsletter. I'm thrilled to have
          you on board! As the sole developer of PokeInfo, this project is my
          personal endeavor fueled by my passion for the enchanting world of
          Pokémon. Thank you for entrusting me with your email address. I assure
          you that your information will be handled securely. Get ready for a
          fantastic journey together! In upcoming newsletters, I'll be sharing
          captivating articles, tips for battling, fascinating Pokémon trivia,
          exclusive interviews, and much more. Stay tuned as we explore topics
          that will inspire, entertain, and deepen your love for all things
          Pokémon. I genuinely hope that PokeInfo becomes a valuable resource
          for you, helping you stay up-to-date with the latest Pokémon news and
          expanding your knowledge about this extraordinary world. May your
          Pokémon adventures be thrilling, your discoveries endless, and your
          victories sweet. Remember, the bonds you forge with your Pokémon are
          truly magical, and I'm here to celebrate every step of your remarkable
          journey. Once again, welcome to the PokeInfo community! I'm thrilled
          to have you as a subscriber and look forward to sharing this adventure
          with you. If you have any questions, suggestions, or just want to say
          hello, feel free to reach out to me. I'm always here to assist you.
          Wishing you great things and a world full of Poké-adventures!
        </p>
      </div>
      <div class="gif-container">
        <div
          class="tenor-gif-embed gifs"
          data-postid="23605194"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
        >
          <a href="https://tenor.com/view/cute-pokemon-gif-23605194"
            >Cute Pokemon Sticker</a
          >from
          <a href="https://tenor.com/search/cute-stickers">Cute Stickers</a>
        </div>
        <div
          class="tenor-gif-embed gifs"
          data-postid="15323958"
          data-share-method="host"
          data-aspect-ratio="1.14695"
          data-width="100%"
        >
          <a
            href="https://tenor.com/view/pokemon-vulpix-cute-smile-gif-15323958"
            >Pokemon Vulpix Sticker</a
          >from
          <a href="https://tenor.com/search/pokemon-stickers"
            >Pokemon Stickers</a
          >
        </div>
        <div
          class="tenor-gif-embed gifs"
          data-postid="24725998"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
        >
          <a
            href="https://tenor.com/view/pokemon-pokememes-frikoid-funny-cute-gif-24725998"
            >Pokemon Pokememes Sticker</a
          >from
          <a href="https://tenor.com/search/pokemon-stickers"
            >Pokemon Stickers</a
          >
        </div>
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
      </div>
      <div class="signture-container">
        <p>PokeInfo developer:</p>
        <p>Mathieu Johnson</p>
      </div>
      <form action="http://localhost:3000/newsletter/unsubscribe" method="post">
        <div class="btn-container">
          <button type="submit" class="btn">Unsubscribe</button>
        </div>
      </form>
    </div>
  </body>
</html>
`;

// x = await readFile(
//   path.join(__dirname, "..", "views", "signedUpEmail.html"),
//   "utf8"
// );

HTML = `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&amp;display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:520px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8dcd8;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h1 style="margin: 0; color: #2b0c08; direction: ltr; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; font-size: 33px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Welcome to PokeInfo's Newsletter!</span></h1>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center" style="line-height:10px"><a href="https://tenor.com/en-CA/view/pokemon-pokememes-frikoid-funny-cute-gif-24725998" target="_blank" style="outline:none" tabindex="-1"><img class="big" src="https://530ed3176d.imgdist.com/public/users/BeeFree/beefree-tksovy76bcn/editor_images/pokemon-pokememes_2.gif" style="display: block; height: auto; border: 0; width: 498px; max-width: 100%;" width="498"></a></div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#2b0c08;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
																	<p style="margin: 0; margin-bottom: 16px;">&nbsp;</p>
																	<p style="margin: 0; margin-bottom: 16px;">Welcome to&nbsp;PokeInfo,</p>
																	<p style="margin: 0; margin-bottom: 16px;">your ultimate source for all things Pokémon! I want to express my</p>
																	<p style="margin: 0; margin-bottom: 16px;">heartfelt gratitude for joining my newsletter. I'm thrilled to have</p>
																	<p style="margin: 0; margin-bottom: 16px;">you on board! As the sole developer of PokeInfo, this project is my</p>
																	<p style="margin: 0; margin-bottom: 16px;">personal endeavor fueled by my passion for the enchanting world of</p>
																	<p style="margin: 0; margin-bottom: 16px;">Pokémon. Thank you for entrusting me with your email address. I assure</p>
																	<p style="margin: 0; margin-bottom: 16px;">you that your information will be handled securely. Get ready for a</p>
																	<p style="margin: 0; margin-bottom: 16px;">fantastic journey together! In upcoming newsletters, I'll be sharing</p>
																	<p style="margin: 0; margin-bottom: 16px;">captivating articles, tips for battling, fascinating Pokémon trivia,</p>
																	<p style="margin: 0; margin-bottom: 16px;">exclusive interviews, and much more.</p>
																	<p style="margin: 0; margin-bottom: 16px;">I genuinely hope that PokeInfo becomes a valuable resource</p>
																	<p style="margin: 0; margin-bottom: 16px;">for you, helping you stay up-to-date with the latest Pokémon news and</p>
																	<p style="margin: 0; margin-bottom: 16px;">expanding your knowledge about this extraordinary world. May your</p>
																	<p style="margin: 0; margin-bottom: 16px;">Pokémon adventures be thrilling, your discoveries endless, and your</p>
																	<p style="margin: 0; margin-bottom: 16px;">victories sweet. Remember, the bonds you forge with your Pokémon are</p>
																	<p style="margin: 0; margin-bottom: 16px;">truly magical, and I'm here to celebrate every step of your remarkable</p>
																	<p style="margin: 0; margin-bottom: 16px;">journey. Once again, welcome to the PokeInfo community! I'm thrilled</p>
																	<p style="margin: 0; margin-bottom: 16px;">to have you as a subscriber and look forward to sharing this adventure</p>
																	<p style="margin: 0; margin-bottom: 16px;">with you. If you have any questions, suggestions, or just want to say</p>
																	<p style="margin: 0; margin-bottom: 16px;">hello, feel free to reach out to me.</p>
																	<p style="margin: 0; margin-bottom: 16px;">I'm always here to assist you.</p>
																	<p style="margin: 0; margin-bottom: 16px;">Wishing you great things and a world full of Poké-adventures!</p>
																	<p style="margin: 0;">&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:5173" style="height:38px;width:133px;v-text-anchor:middle;" arcsize="11%" stroke="false" fillcolor="#f7343d"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#2b0c08; font-family:Arial, sans-serif; font-size:14px"><![endif]--><a href="http://localhost:5173" target="_blank" style="text-decoration:none;display:inline-block;color:#2b0c08;background-color:#f7343d;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 28px;">Go to PokeInfo</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<table class="divider_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:60px;">
																<div style="color:#2b0c08;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:11px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:13.2px;">
																	<p style="margin: 0;">This email was to confirm your subscription to PokeInfo's newsletter. If this was a mistake or want to stop receiving emails, please unsubscribe below.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/newsletter/unsubscribe" style="height:38px;width:117px;v-text-anchor:middle;" arcsize="3%" stroke="false" fillcolor="#f7343d"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#2b0c08; font-family:Arial, sans-serif; font-size:14px"><![endif]--><a href="http://localhost:3000/newsletter/unsubscribe" target="_blank" style="text-decoration:none;display:inline-block;color:#2b0c08;background-color:#f7343d;border-radius:1px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 28px;">Unsubscribe</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			<table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
																				<tr>
																					<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																					<td style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>`;

module.exports = HTML;
