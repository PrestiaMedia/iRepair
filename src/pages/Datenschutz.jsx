import React from 'react';

const Datenschutz = () => {
  return (
    <div className="legal-page" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', color: '#000000', fontFamily: 'sans-serif', fontSize: '18px' }}>
      <style>{`
        .legal-page, .legal-page p, .legal-page h1, .legal-page h2, .legal-page h3, .legal-page a, .legal-page strong, .legal-page li {
          color: #000000 !important;
        }
      `}</style>
      
      <h1 style={{ fontSize: '54px', marginBottom: '40px', fontWeight: 'bold' }}>Datenschutzerklärung</h1>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>1. Verantwortlicher</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die iRepairStore GmbH.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wir nehmen den Schutz personenbezogener Daten ernst. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Dazu gehören zum Beispiel Name, E-Mail-Adresse, Telefonnummer, IP-Adresse, technische Zugriffsdaten oder Angaben, die Sie uns über ein Kontaktformular übermitteln.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb unserer Website, die Bearbeitung von Anfragen, die Kommunikation mit Interessenten und Kunden, die Durchführung vorvertraglicher Maßnahmen, die Erfüllung vertraglicher Pflichten oder die Einhaltung gesetzlicher Vorgaben erforderlich ist.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch unserer Website und bei der Nutzung unserer Online-Angebote verarbeitet werden, zu welchen Zwecken dies geschieht und welche Rechte betroffene Personen haben.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>3. Rechtsgrundlagen der Verarbeitung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung personenbezogener Daten erfolgt insbesondere auf Grundlage folgender Vorschriften der DSGVO:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Art. 6 Abs. 1 lit. a DSGVO, sofern eine Einwilligung erteilt wurde.</li>
        <li>Art. 6 Abs. 1 lit. b DSGVO, sofern die Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</li>
        <li>Art. 6 Abs. 1 lit. c DSGVO, sofern eine rechtliche Verpflichtung zur Verarbeitung besteht.</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO, sofern die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und keine überwiegenden Interessen oder Grundrechte der betroffenen Person entgegenstehen.</li>
      </ul>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>4. Ihre Rechte</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen folgende Rechte:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Recht auf Auskunft über die gespeicherten personenbezogenen Daten gemäß Art. 15 DSGVO.</li>
        <li>Recht auf Berichtigung unrichtiger oder unvollständiger personenbezogener Daten gemäß Art. 16 DSGVO.</li>
        <li>Recht auf Löschung personenbezogener Daten gemäß Art. 17 DSGVO.</li>
        <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO.</li>
        <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO.</li>
        <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen gemäß Art. 21 DSGVO.</li>
        <li>Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft gemäß Art. 7 Abs. 3 DSGVO.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Außerdem besteht das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>5. Widerruf einer Einwilligung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sofern eine Verarbeitung auf Grundlage einer Einwilligung erfolgt, kann diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen werden. Die Rechtmäßigkeit der Verarbeitung bis zum Zeitpunkt des Widerrufs bleibt vom Widerruf unberührt.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>6. Widerspruchsrecht nach Art. 21 DSGVO</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wenn personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, besteht das Recht, aus Gründen, die sich aus der besonderen Situation der betroffenen Person ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wird Widerspruch eingelegt, verarbeiten wir die betroffenen personenbezogenen Daten nicht mehr, es sei denn, es liegen zwingende schutzwürdige Gründe für die Verarbeitung vor, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>7. Bereitstellung der Website</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website wird als moderne Webanwendung betrieben. Die technische Umsetzung erfolgt auf Basis von React/Vite. Die Website wird statisch ausgeliefert und über Cloudflare Pages bereitgestellt.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Beim Aufruf der Website werden technisch notwendige Daten verarbeitet, damit die Website im Browser angezeigt werden kann. Hierzu können insbesondere folgende Daten gehören:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>IP-Adresse des zugreifenden Geräts.</li>
        <li>Datum und Uhrzeit des Zugriffs.</li>
        <li>Aufgerufene Seiten und Dateien.</li>
        <li>Übertragene Datenmenge.</li>
        <li>Browsertyp und Browserversion.</li>
        <li>Betriebssystem.</li>
        <li>Referrer-URL.</li>
        <li>Technische Verbindungsdaten.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Diese Daten sind technisch erforderlich, um die Website auszuliefern, die Stabilität zu gewährleisten, Missbrauch zu verhindern und die Sicherheit der Systeme zu kontrollieren.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren, stabilen und effizienten Bereitstellung der Website.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>8. Hosting über Cloudflare Pages</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Für die Bereitstellung unserer Website nutzen wir Cloudflare Pages. Cloudflare stellt technische Infrastruktur bereit, über die unsere Website ausgeliefert, beschleunigt und abgesichert wird.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Beim Besuch unserer Website können personenbezogene Daten, insbesondere technische Zugriffsdaten und IP-Adressen, durch Cloudflare verarbeitet werden. Dies ist erforderlich, damit die Website weltweit erreichbar ist, vor Angriffen geschützt wird und Inhalte zuverlässig ausgeliefert werden können.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Cloudflare kann dabei insbesondere folgende Funktionen übernehmen:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Bereitstellung der Website.</li>
        <li>Auslieferung statischer Dateien.</li>
        <li>Absicherung gegen Angriffe und missbräuchliche Zugriffe.</li>
        <li>DNS- und Netzwerkfunktionen.</li>
        <li>Optimierung der Ladegeschwindigkeit.</li>
        <li>Verarbeitung technischer Logdaten.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und leistungsfähigen Betrieb der Website.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Soweit Cloudflare personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt dies auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>9. Server-Logfiles und technische Zugriffsdaten</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Beim Aufruf unserer Website können automatisch technische Informationen in Server-Logfiles verarbeitet werden. Diese Daten dienen insbesondere der technischen Bereitstellung, Fehleranalyse, Systemsicherheit und Missbrauchsverhinderung.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Eine personenbezogene Auswertung zu Marketingzwecken findet nicht statt. Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht, sofern dies nicht zur Aufklärung technischer Störungen, Sicherheitsvorfälle oder missbräuchlicher Nutzung erforderlich ist.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>10. Kontaktaufnahme über das Kontaktformular</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen eingegebenen Daten zur Bearbeitung Ihrer Anfrage.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dabei können insbesondere folgende Daten verarbeitet werden:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Name.</li>
        <li>E-Mail-Adresse.</li>
        <li>Telefonnummer.</li>
        <li>Nachrichtentext.</li>
        <li>Angaben zum Anliegen.</li>
        <li>Technische Metadaten der Formularübermittlung.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Daten werden verwendet, um die Anfrage zuzuordnen, zu bearbeiten, zu beantworten und mögliche Anschlussfragen zu klären.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage mit einem bestehenden Vertrag, einem möglichen Vertrag oder vorvertraglichen Maßnahmen zusammenhängt.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der effizienten Bearbeitung eingehender Anfragen und der Kommunikation mit Interessenten und Kunden.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>11. Technische Verarbeitung des Kontaktformulars über n8n</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Zur technischen Verarbeitung und Weiterleitung von Kontaktformular-Anfragen nutzen wir eine Automatisierung über n8n.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wenn ein Formular auf der Website abgesendet wird, können die eingegebenen Daten an einen n8n-Workflow übermittelt werden. Dieser Workflow verarbeitet die Anfrage automatisch und leitet sie an die zuständige Stelle weiter.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung über n8n dient insbesondere folgenden Zwecken:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Automatisierte Übermittlung der Kontaktanfrage.</li>
        <li>Strukturierte Weiterleitung der Formulardaten.</li>
        <li>Benachrichtigung per E-Mail.</li>
        <li>Schnellere Bearbeitung eingehender Anfragen.</li>
        <li>Vermeidung manueller Übertragungsfehler.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Daten werden dabei nicht zu Werbezwecken verwendet und nicht verkauft.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Je nach technischer Konfiguration kann n8n als Cloud-Dienst oder als selbst gehostete Instanz betrieben werden. Soweit ein externer Dienstleister personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt dies auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage der Durchführung vorvertraglicher Maßnahmen oder eines Vertrags dient. Zusätzlich oder alternativ erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da ein berechtigtes Interesse an der sicheren, strukturierten und effizienten Bearbeitung von Anfragen besteht.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>12. E-Mail-Weiterleitung und E-Mail-Kommunikation</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Kontaktformular-Anfragen können automatisiert per E-Mail weitergeleitet werden. Dabei werden die eingegebenen Formulardaten in eine E-Mail übertragen und an die zuständige E-Mail-Adresse gesendet.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Hierbei können insbesondere folgende Daten verarbeitet werden:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Name.</li>
        <li>E-Mail-Adresse.</li>
        <li>Telefonnummer.</li>
        <li>Nachrichtentext.</li>
        <li>Zeitpunkt der Anfrage.</li>
        <li>Technische Versandinformationen.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die E-Mail kann über eine von uns genutzte E-Mail-Infrastruktur versendet oder weitergeleitet werden. Dabei können personenbezogene Daten durch technische E-Mail-Dienstleister verarbeitet werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung erfolgt zur Kommunikation mit Interessenten und Kunden, zur Beantwortung von Anfragen und zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Kommunikation mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt. In übrigen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>13. Pflichtangaben und freiwillige Angaben im Kontaktformular</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die im Kontaktformular als erforderlich gekennzeichneten Angaben werden benötigt, um eine Anfrage sinnvoll bearbeiten zu können. Ohne diese Angaben kann eine Bearbeitung nicht oder nur eingeschränkt erfolgen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Weitere Angaben sind freiwillig. Freiwillige Angaben werden ausschließlich zur Bearbeitung der jeweiligen Anfrage verwendet.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>14. Speicherdauer von Kontaktanfragen</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Kontaktanfragen werden nur so lange gespeichert, wie dies für die Bearbeitung der Anfrage erforderlich ist.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sofern sich aus der Anfrage ein Vertragsverhältnis ergibt oder gesetzliche Aufbewahrungspflichten bestehen, können die betreffenden Daten entsprechend den gesetzlichen Fristen länger gespeichert werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Handels- und steuerrechtlich relevante Unterlagen können insbesondere für sechs oder zehn Jahre aufbewahrt werden.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>15. Kundenbereich und Login-Funktion</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Soweit auf der Website ein Kundenbereich oder eine Login-Funktion bereitgestellt wird, verarbeiten wir personenbezogene Daten, um registrierten oder berechtigten Nutzern Zugriff auf geschützte Inhalte, Informationen oder Funktionen zu ermöglichen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Im Rahmen eines Kundenbereichs können insbesondere folgende Daten verarbeitet werden:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Name.</li>
        <li>E-Mail-Adresse.</li>
        <li>Login-Daten.</li>
        <li>Kundennummer oder interne Zuordnungsdaten.</li>
        <li>Angaben zu Reparaturaufträgen.</li>
        <li>Angaben zu Anfragen.</li>
        <li>Statusinformationen.</li>
        <li>Kommunikationsdaten.</li>
        <li>Technische Zugriffsdaten.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung erfolgt zur Bereitstellung des Kundenbereichs, zur Authentifizierung von Nutzern, zur Anzeige kundenbezogener Informationen und zur Durchführung vertraglicher Leistungen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Soweit die Verarbeitung der Sicherheit, Zugriffskontrolle oder Missbrauchsverhinderung dient, erfolgt sie zusätzlich auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Falls ein Kundenbereich aktuell noch nicht aktiv bereitgestellt wird, gilt dieser Abschnitt erst ab Aktivierung einer entsprechenden Funktion.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>16. Authentifizierung und Zugriffsschutz</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Falls ein Login- oder Kundenbereich verwendet wird, werden technische Maßnahmen eingesetzt, um den Zugriff auf geschützte Inhalte zu beschränken.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dabei können insbesondere Login-Daten, Sitzungsinformationen, Zugriffsdaten und technische Sicherheitsinformationen verarbeitet werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung dient der Authentifizierung, Zugriffskontrolle, Systemsicherheit und Verhinderung unbefugter Zugriffe.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit der Login-Bereich zur Vertragserfüllung genutzt wird. Zusätzlich erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>17. Reparaturanfragen und Serviceanfragen</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wenn über die Website Anfragen zu Reparaturen, Diagnosen, Kostenvoranschlägen oder sonstigen Serviceleistungen gestellt werden, verarbeiten wir die angegebenen Daten zur Bearbeitung des jeweiligen Anliegens.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dabei können je nach Anfrage insbesondere folgende Daten verarbeitet werden:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Name.</li>
        <li>Kontaktdaten.</li>
        <li>Gerätetyp.</li>
        <li>Modellangaben.</li>
        <li>Fehlerbeschreibung.</li>
        <li>Angaben zum Schaden.</li>
        <li>Bilder oder sonstige freiwillig übermittelte Informationen.</li>
        <li>Kommunikationsverlauf.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung erfolgt zur Prüfung und Bearbeitung der Anfrage, zur Erstellung eines Angebots, zur Kommunikation und zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>18. Datei- oder Bilduploads</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Soweit über die Website künftig Upload-Funktionen bereitgestellt werden, können hochgeladene Dateien oder Bilder verarbeitet werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dies kann zum Beispiel der Fall sein, wenn Nutzer Bilder eines Geräts, eines Schadens oder sonstige Unterlagen übermitteln.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Hochgeladene Dateien werden ausschließlich zur Bearbeitung der jeweiligen Anfrage oder zur Erbringung der angefragten Leistung verwendet.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Es sollten keine sensiblen personenbezogenen Daten übermittelt werden, sofern dies für die Bearbeitung nicht erforderlich ist.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern der Upload zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen erforderlich ist. In übrigen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Falls aktuell keine Upload-Funktion besteht, gilt dieser Abschnitt erst ab Bereitstellung einer solchen Funktion.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>19. Zahlungsdaten und kostenpflichtige Leistungen</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Soweit kostenpflichtige Leistungen beauftragt werden, können weitere Daten verarbeitet werden, die zur Durchführung der Zahlung, Rechnungsstellung und Buchhaltung erforderlich sind.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dazu können insbesondere gehören:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Name.</li>
        <li>Rechnungsdaten.</li>
        <li>Kontaktdaten.</li>
        <li>Leistungsdaten.</li>
        <li>Zahlungsinformationen.</li>
        <li>Rechnungs- und Buchhaltungsunterlagen.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung erfolgt zur Durchführung des Vertrags, zur Abrechnung und zur Erfüllung gesetzlicher Pflichten.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für vertragliche Leistungen und Art. 6 Abs. 1 lit. c DSGVO für gesetzliche Aufbewahrungs- und Nachweispflichten.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>20. Gesetzliche Aufbewahrungspflichten</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Bestimmte Daten müssen aufgrund gesetzlicher Vorgaben aufbewahrt werden. Dies betrifft insbesondere handelsrechtliche und steuerrechtliche Unterlagen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die entsprechenden Daten werden nach Ablauf der gesetzlichen Aufbewahrungsfristen gelöscht, sofern keine weiteren berechtigten Gründe für eine Speicherung bestehen.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>21. Cookies</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website verwendet nur solche Cookies oder vergleichbaren Technologien, die für den technischen Betrieb erforderlich sind, sofern keine weiteren Dienste aktiv eingebunden wurden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Technisch notwendige Cookies können erforderlich sein, um grundlegende Funktionen der Website bereitzustellen, Sicherheit zu gewährleisten oder einen Login-Bereich funktionsfähig zu machen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sofern künftig Cookies für Analyse, Marketing, externe Medien oder andere nicht notwendige Zwecke eingesetzt werden, erfolgt dies nur auf Grundlage einer Einwilligung, soweit gesetzlich erforderlich.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>22. Lokale Speicherung im Browser</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website kann technische Informationen lokal im Browser speichern, soweit dies für die Funktionalität der Website erforderlich ist.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dies kann insbesondere bei modernen Webanwendungen vorkommen, zum Beispiel für Anzeigeeinstellungen, technische Zustände, Formularfunktionen oder Login-Sitzungen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Eine Nutzung zu Werbe- oder Profiling-Zwecken findet nicht statt, sofern keine entsprechenden Dienste aktiv eingebunden sind.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>23. Keine WordPress-Verarbeitung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Website wird nicht mehr als klassische WordPress-Website betrieben, sofern dies technisch vollständig umgestellt wurde.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Damit entfallen typische WordPress-bezogene Verarbeitungen, die nur bei einem aktiven WordPress-System relevant wären, zum Beispiel WordPress-Kommentare, WordPress-Login-Funktionen, WordPress-Plugins oder WordPress-spezifische Cookies.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollten einzelne WordPress-Komponenten technisch weiterhin aktiv sein, gelten die jeweiligen Datenschutzanforderungen für diese Komponenten zusätzlich.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>24. Keine Kommentarfunktion</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website stellt keine öffentliche Kommentarfunktion bereit.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Es werden daher keine personenbezogenen Daten für öffentliche Kommentare, Kommentarprofile, Kommentarzeitpunkte oder Kommentar-Moderation verarbeitet.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollte künftig eine Kommentarfunktion eingeführt werden, wird diese Datenschutzerklärung entsprechend angepasst.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>25. Kein Newsletter</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Aktuell wird über die Website kein Newsletter angeboten.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Es findet daher keine Verarbeitung personenbezogener Daten zum Zweck des Newsletterversands statt.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollte künftig ein Newsletter angeboten werden, wird diese Datenschutzerklärung entsprechend ergänzt. In diesem Fall erfolgt ein Versand nur nach Maßgabe der gesetzlichen Anforderungen, insbesondere auf Grundlage einer Einwilligung, soweit erforderlich.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>26. Keine Analyse- und Trackingdienste</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Derzeit setzen wir keine Analyse- oder Trackingdienste wie Google Analytics, Google Tag Manager, Google Ads, Google Remarketing, Meta Pixel oder vergleichbare Dienste ein, sofern diese technisch nicht ausdrücklich eingebunden wurden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Es erfolgt keine Erstellung von Nutzerprofilen zu Werbezwecken.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Es findet kein Marketing-Tracking durch uns statt.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollten solche Dienste künftig eingesetzt werden, wird diese Datenschutzerklärung entsprechend erweitert und, soweit erforderlich, eine Einwilligung eingeholt.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>27. Keine Google Analytics-Nutzung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Google Analytics wird derzeit nicht eingesetzt, sofern es technisch nicht ausdrücklich eingebunden wurde.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Es werden daher keine Nutzungsdaten über Google Analytics erhoben, keine Google-Analytics-Cookies gesetzt und keine Google-Analytics-Profile erstellt.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Falls Google Analytics künftig verwendet wird, erfolgt dies nur im Rahmen der gesetzlichen Anforderungen und, soweit erforderlich, auf Grundlage einer Einwilligung.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>28. Keine Google Ads- und Remarketing-Nutzung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Google Ads, Conversion-Tracking und Google Remarketing werden derzeit nicht eingesetzt, sofern diese Dienste technisch nicht ausdrücklich eingebunden wurden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Es werden daher keine personenbezogenen Daten durch uns für Google-Werbeauswertungen, Conversion-Tracking oder Remarketing-Zwecke verarbeitet.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollte künftig Online-Werbung mit Tracking eingesetzt werden, wird diese Datenschutzerklärung entsprechend angepasst.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>29. Externe Schriftarten</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Soweit Schriftarten lokal auf der Website eingebunden sind, erfolgt beim Laden der Schriftarten keine direkte Verbindung zu externen Anbietern.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollten externe Schriftarten über Drittanbieter eingebunden werden, kann beim Aufruf der Website eine Verbindung zu Servern des jeweiligen Anbieters entstehen. Dabei können technische Daten wie IP-Adresse und Browserinformationen verarbeitet werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Soweit möglich, werden Schriftarten lokal eingebunden, um externe Datenübertragungen zu vermeiden.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>30. Bilder, Icons und sonstige Assets</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Bilder, Icons, Grafiken, Skripte und sonstige Website-Assets werden grundsätzlich lokal oder über die eingesetzte Hosting-Infrastruktur ausgeliefert.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wenn externe Quellen oder Content Delivery Networks verwendet werden, kann beim Abruf dieser Inhalte eine Verbindung zu den jeweiligen Servern entstehen. Dabei können technische Zugriffsdaten verarbeitet werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Die Verarbeitung erfolgt zur Darstellung und Funktionsfähigkeit der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>31. Externe Links</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website kann Links zu externen Websites enthalten.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wenn Sie einen externen Link anklicken, verlassen Sie unsere Website. Für die Datenverarbeitung auf externen Websites sind die jeweiligen Betreiber verantwortlich.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wir haben keinen Einfluss darauf, welche Daten auf externen Websites verarbeitet werden.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>32. Google Maps</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Google Maps wird derzeit nicht aktiv eingebunden, sofern dies technisch nicht ausdrücklich umgesetzt wurde.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollte Google Maps künftig eingebunden werden, können beim Aufruf der Karte personenbezogene Daten, insbesondere IP-Adresse und technische Zugriffsdaten, an Google übertragen werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>In diesem Fall wird diese Datenschutzerklärung entsprechend ergänzt. Soweit erforderlich, erfolgt eine Einbindung erst nach Einwilligung.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>33. YouTube-Videos</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>YouTube-Videos werden derzeit nicht aktiv eingebunden, sofern dies technisch nicht ausdrücklich umgesetzt wurde.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Sollten künftig YouTube-Videos eingebunden werden, können beim Aufruf oder Start eines Videos personenbezogene Daten an YouTube bzw. Google übertragen werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>In diesem Fall wird diese Datenschutzerklärung entsprechend ergänzt. Soweit erforderlich, erfolgt eine Einbindung erst nach Einwilligung.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>34. Social-Media-Links</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website kann Links zu Social-Media-Profilen enthalten.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Solange diese Links lediglich als normale externe Links eingebunden sind, werden beim Besuch unserer Website keine personenbezogenen Daten automatisch an die jeweiligen Social-Media-Anbieter übertragen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Erst wenn ein solcher Link angeklickt wird, wird die jeweilige externe Plattform aufgerufen. Für die dortige Datenverarbeitung ist der jeweilige Anbieter verantwortlich.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>35. Einbindung externer Dienste</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Falls externe Dienste, Skripte, APIs, Karten, Videos, Analyse-Tools, Zahlungsdienste oder sonstige Drittanbieter technisch eingebunden werden, kann es zu einer Übertragung personenbezogener Daten an diese Anbieter kommen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Diese Datenschutzerklärung wird angepasst, sobald solche Dienste aktiv eingesetzt werden und datenschutzrechtlich relevant sind.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Nicht technisch aktive Dienste werden von uns nicht verarbeitet.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>36. Sicherheit der Datenübertragung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website nutzt eine verschlüsselte Verbindung über HTTPS.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dadurch werden Daten, die zwischen dem Browser des Nutzers und unserer Website übertragen werden, nach aktuellem Stand der Technik geschützt.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Eine verschlüsselte Verbindung erkennen Sie unter anderem daran, dass die Adresszeile des Browsers mit „https://“ beginnt.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>37. Technische und organisatorische Maßnahmen</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten gegen Verlust, Missbrauch, unbefugten Zugriff, Veränderung oder Offenlegung zu schützen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dazu können insbesondere gehören:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Verschlüsselte Datenübertragung.</li>
        <li>Zugriffsbeschränkungen.</li>
        <li>Sichere Hosting-Infrastruktur.</li>
        <li>Beschränkung von Administrationszugriffen.</li>
        <li>Technische Schutzmaßnahmen gegen Missbrauch.</li>
        <li>Regelmäßige Prüfung der eingesetzten Systeme und Dienste.</li>
      </ul>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>38. Auftragsverarbeiter</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wir können externe Dienstleister einsetzen, die personenbezogene Daten in unserem Auftrag verarbeiten.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Dies betrifft insbesondere Dienstleister aus folgenden Bereichen:</p>
      <ul style={{ lineHeight: '1.6', marginBottom: '25px' }}>
        <li>Hosting und Infrastruktur.</li>
        <li>Website-Bereitstellung.</li>
        <li>Automatisierung.</li>
        <li>E-Mail-Kommunikation.</li>
        <li>IT-Wartung.</li>
        <li>Technischer Support.</li>
      </ul>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Soweit diese Dienstleister personenbezogene Daten in unserem Auftrag verarbeiten, erfolgt dies auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>39. Drittlandübermittlungen</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Bei der Nutzung bestimmter technischer Dienstleister kann es zu einer Verarbeitung personenbezogener Daten außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums kommen.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Eine solche Verarbeitung erfolgt nur, soweit hierfür eine gesetzliche Grundlage besteht. Dies kann insbesondere auf Grundlage eines Angemessenheitsbeschlusses der Europäischen Kommission, geeigneter Garantien, Standardvertragsklauseln oder sonstiger gesetzlich vorgesehener Mechanismen erfolgen.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>40. Datenweitergabe</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, wenn dies zur Bearbeitung einer Anfrage, zur Erfüllung eines Vertrags, zur technischen Bereitstellung, aufgrund gesetzlicher Pflichten oder auf Grundlage eines berechtigten Interesses erforderlich ist.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Eine Weitergabe zu Verkaufszwecken findet nicht statt.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>41. Keine automatisierte Entscheidungsfindung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>42. Minderjährige</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Unsere Website richtet sich nicht gezielt an Minderjährige.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Personen unter 16 Jahren sollten personenbezogene Daten nur mit Zustimmung der Erziehungsberechtigten übermitteln.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>43. Aktualität und Änderung dieser Datenschutzerklärung</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich rechtliche Anforderungen ändern oder wenn technische, organisatorische oder inhaltliche Änderungen an unserer Website oder unseren Dienstleistungen vorgenommen werden.</p>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Für den Besuch der Website gilt jeweils die zum Zeitpunkt des Besuchs abrufbare Datenschutzerklärung.</p>

      <h2 style={{ fontSize: '28px', marginTop: '30px', marginBottom: '15px', fontWeight: 'bold' }}>44. Kontakt zum Datenschutz</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie sich an den Verantwortlichen wenden.</p>

    </div>
  );
};

export default Datenschutz;
