import BlockQuote from '@/views/routes/product/components/content-section/block-quote'
import ContentTitle from '@/views/routes/product/components/content-section/content-title'
import Heading from '@/views/routes/product/components/content-section/heading'
import Reaction from '@/views/routes/product/components/content-section/reaction'
import RelatedPosts from '@/views/routes/product/components/content-section/related-posts'
import Image from 'next/image'

function ProductPageMainContent() {
	return (
		<div className="flex flex-col gap-4">
			<ContentTitle
				category="Quản Lý Sản Xuất"
				title="Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết"
				authorName="FOSO Creator"
				authorAvatar="/assets/images/avatar.png"
				updateDate="17/11/2022"
				readTime="10"
			/>

			<div className="text-[#231F20] text-base">
				<Image
					src="/assets/images/content-bg-01.png"
					alt="..."
					width={900}
					height={600}
					className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
				/>
				<p className="text-center text-[#667F93]">Quy trình 5s là gì?</p>
				<BlockQuote
					type="primary"
					text="Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé."
				/>
				<Heading as="h2">1. Quy trình 5S là gì?</Heading>
				<p>
					Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S
					là đến từ xứ sở hoa anh đào Nhật Bản.
					<br />
					<br />
					Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang
					lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
				</p>
				<ul className="list-disc pl-5">
					<li className="marker:text-[#15AA7A]">
						<span className="text-[#15AA7A] font-semibold">Seiri </span>
						(Ngăn nắp)
					</li>
					<li className="marker:text-[#15AA7A]">
						<span className="text-[#15AA7A] font-semibold">Seiton </span>
						(Sắp xếp)
					</li>
					<li className="marker:text-[#15AA7A]">
						<span className="text-[#15AA7A] font-semibold">Seiso </span>
						(Vệ sinh)
					</li>
					<li className="marker:text-[#15AA7A]">
						<span className="text-[#15AA7A] font-semibold">Seiketsu </span>
						(Tiêu chuẩn hóa)
					</li>
					<li className="marker:text-[#15AA7A]">
						<span className="text-[#15AA7A] font-semibold">Shitsuke </span>
						(Kỷ luật)
					</li>
				</ul>
				<Heading as="h2">2. Lợi ích quy trình 5S đem lại</Heading>
				<p>
					Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích
					cải tiến môi trường làm việc của doanh nghiệp.
					<br />
					<br />
					Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được
					sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt
					theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
					<br />
					<br />
					Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ
					đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.
				</p>
				<Image
					src="/assets/images/content-bg-02.png"
					alt="..."
					width={900}
					height={600}
					className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
				/>
				<p className="text-center text-[#667F93]">Tại sao doanh nghiệp cần quy trình 5S?</p>
				<Heading as="h2">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</Heading>
				<p>
					Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt
					Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì
					sao bạn nên lựa chọn quy trình:
				</p>
				<Heading as="h3">3.1 Cải thiện rõ nét môi trường làm việc</Heading>
				<p>
					Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều
					này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
				</p>
				<Heading as="h3">3.2 Tiết kiệm thời gian đáng kể</Heading>
				<p>
					Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất
					nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có
					trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
				</p>
				<Heading as="h3">3.3 Tăng năng suất làm việc</Heading>
				<p>
					Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân
					viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian
					và tăng năng suất làm việc.
				</p>
				<Heading as="h3">3.4 Tiết kiệm chi phí</Heading>
				<p>
					Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn,
					doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.
				</p>
				<Heading as="h3">3.5 Tăng chất lượng sản phẩm</Heading>
				<p>
					5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản
					phẩm và giảm thiểu lỗi sản xuất không mong muốn.
				</p>
				<Image
					src="/assets/images/content-bg-03.png"
					alt="..."
					width={900}
					height={600}
					className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
				/>
				<p className="text-center text-[#667F93]">Quy trình 5s gồm các bước</p>
				<Heading as="h2">4. Quy trình 5S gồm các bước:</Heading>
				<p>
					5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức
					hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:
				</p>
				<Heading as="h3">4.1 Seiri (Ngăn nắp)</Heading>
				<p>
					Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư
					thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
				</p>
				<Heading as="h3">4.2 Seiton (Sắp xếp)</Heading>
				<p>
					Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một
					cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
				</p>
				<Heading as="h3">4.3 Seiso (Vệ sinh)</Heading>
				<p>
					Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi
					trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm
					bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
				</p>
				<Heading as="h3">4.4 Seiketsu (Tiêu chuẩn hóa)</Heading>
				<p>
					Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự
					sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.{' '}
				</p>
				<Heading as="h3">4.5 Shitsuke (Kỷ luật)</Heading>
				<p>
					Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì
					tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và
					giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.
				</p>
				<Image
					src="/assets/images/content-bg-04.png"
					alt="..."
					width={900}
					height={600}
					className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
				/>
				<p className="text-center text-[#667F93]">Các bước thực hiện quy trình 5s</p>
				<Heading as="h2">5. Quy trình được thực hiện như sau:</Heading>
				<p>
					Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt
					Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì
					sao bạn nên lựa chọn quy trình:
				</p>
				<Heading as="h3">5.1 Giai đoạn chuẩn bị</Heading>
				<p>
					Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình
					thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả
					hơn.
				</p>
				<Heading as="h3">5.2 Triển khai rộng rãi</Heading>
				<p>
					Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong
					doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
				</p>
				<Heading as="h3">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</Heading>
				<p>
					Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên
					tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.
				</p>
				<Heading as="h3">5.4 Sàng lọc, sắp xếp và đánh giá</Heading>
				<p>
					Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa
					ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ
					dàng tìm kiếm sau này.{' '}
				</p>
				<Heading as="h3">5.5 Đánh giá</Heading>
				<p>
					Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải
					tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.
				</p>
				<Heading as="h2">6. Quy trình 5S có giống với Kaizen?</Heading>
				<p>
					Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2
					khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau. <br />
					<br /> Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan
					trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm
					bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững
					chắc cho các hoạt động cải tiến tiếp theo.
				</p>
				<br />
				<BlockQuote
					type="secondary"
					text="Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững."
				/>
				<br />
				<BlockQuote
					type="secondary"
					text="Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc."
				/>
				<Heading as="h2">7. Đối tượng nào nên áp dụng 5S?</Heading>
				<p>
					Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các
					loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ
					quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
					<br />
					<br />
					Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng
					phải được quản lý và sử dụng hiệu quả.
				</p>
				<Image
					src="/assets/images/content-bg-05.png"
					alt="..."
					width={900}
					height={600}
					className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-lg"
				/>
				<p className="text-center text-[#667F93]">Các yếu tố tạo nên thành công cho quy trình 5S</p>
				<Heading as="h2">8. Các yếu tố tạo nên thành công cho quy trình 5S</Heading>
				<p>
					Các yếu tố tạo nên thành công cho quy trình 5S Và những nhân tố quyết định đến quá trình thành công
					của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
				</p>
				<br />
				<ul className="list-disc pl-5">
					<li className="marker:text-[#15AA7A]">
						<span className="text-[#15AA7A] font-semibold">Seiri </span>
						(Ngăn nắp)
					</li>
					<li className="marker:text-[#15AA7A]">
						Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để
						quyết định doanh nghiệp có áp dụng quy tắc này hay không.
					</li>
					<li className="marker:text-[#15AA7A]">
						Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ
						phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.
					</li>
					<li className="marker:text-[#15AA7A]">
						Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân
						viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.
					</li>
				</ul>
				<br />
				Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần
				nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin
				bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc
				trong tương lai.
			</div>

			<Reaction />
			<RelatedPosts />
		</div>
	)
}

export default ProductPageMainContent
